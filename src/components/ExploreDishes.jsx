import { useEffect, useState } from 'react'
import Reveal from './Reveal.jsx'

// A few TheMealDB categories that suit a cafe's dessert/snack vibe.
const CATEGORIES = ['Dessert', 'Breakfast', 'Starter', 'Side', 'Miscellaneous']
const API = 'https://www.themealdb.com/api/json/v1/1/filter.php?c='

export default function ExploreDishes() {
  // --- state: what category is selected, the fetched dishes, and the request status ---
  const [category, setCategory] = useState('Dessert')
  const [meals, setMeals] = useState([])
  const [status, setStatus] = useState('loading') // 'loading' | 'error' | 'ready'
  const [reload, setReload] = useState(0) // bump this to retry the same category

  // --- effect: fetch whenever the category changes (or a retry is requested) ---
  useEffect(() => {
    let cancelled = false // guards against setting state after unmount / fast re-clicks
    setStatus('loading')

    fetch(API + encodeURIComponent(category))
      .then((res) => {
        if (!res.ok) throw new Error(`HTTP ${res.status}`)
        return res.json()
      })
      .then((data) => {
        if (cancelled) return
        setMeals(data.meals || []) // TheMealDB returns { meals: null } when empty
        setStatus('ready')
      })
      .catch(() => {
        if (!cancelled) setStatus('error')
      })

    return () => {
      cancelled = true
    }
  }, [category, reload])

  return (
    <section className="section explore" id="explore">
      <div className="container">
        <Reveal className="section-head">
          <p className="eyebrow">From the Test Kitchen</p>
          <h2 className="section-title">Explore dishes</h2>
          <p className="section-lead">
            A live demo powered by TheMealDB — pick a category and we'll fetch fresh ideas.
          </p>
        </Reveal>

        {/* Category filter — clicking sets state, which re-runs the effect above */}
        <div className="menu-tabs" role="tablist" aria-label="Dish categories">
          {CATEGORIES.map((c) => (
            <button
              key={c}
              className={`menu-tab${category === c ? ' is-active' : ''}`}
              role="tab"
              aria-selected={category === c}
              onClick={() => setCategory(c)}
            >
              {c}
            </button>
          ))}
        </div>

        {/* Loading state */}
        {status === 'loading' && (
          <p className="explore-state" role="status">Loading dishes…</p>
        )}

        {/* Error state — with a retry that re-triggers the effect */}
        {status === 'error' && (
          <p className="explore-state explore-error" role="alert">
            Couldn't load dishes right now.{' '}
            <button type="button" className="linklike" onClick={() => setReload((n) => n + 1)}>
              Try again
            </button>
          </p>
        )}

        {/* Empty state */}
        {status === 'ready' && meals.length === 0 && (
          <p className="explore-state">No dishes found in this category.</p>
        )}

        {/* Success state — show up to 8 dishes */}
        {status === 'ready' && meals.length > 0 && (
          <div className="explore-grid">
            {meals.slice(0, 8).map((m) => (
              <article className="explore-card" key={m.idMeal}>
                <img src={m.strMealThumb} alt={m.strMeal} loading="lazy" width="300" height="300" />
                <h3>{m.strMeal}</h3>
              </article>
            ))}
          </div>
        )}
      </div>
    </section>
  )
}
