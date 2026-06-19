import React, { useEffect, useState } from 'react'

export default function ProductList() {
  const [products, setProducts] = useState([])
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState(null)

  useEffect(() => {
    setLoading(true)
    fetch('https://fakestoreapi.com/products')
      .then((res) => {
        if (!res.ok) throw new Error('Network response was not ok')
        return res.json()
      })
      .then((data) => setProducts(data))
      .catch((err) => setError(err.message || 'Fetch error'))
      .finally(() => setLoading(false))
  }, [])

  if (loading) return <p className="status">Loading products...</p>
  if (error) return <p className="status error">Error: {error}</p>

  return (
    <div className="grid">
      {products.map((p) => (
        <article key={p.id} className="card">
          <img src={p.image} alt={p.title} />
          <h3 className="title">{p.title}</h3>
          <p className="price">${p.price}</p>
        </article>
      ))}
    </div>
  )
}
