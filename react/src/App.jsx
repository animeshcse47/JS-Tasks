import React from 'react'
import ProductList from './ProductList'

export default function App() {
  return (
    <div className="app-root">
      <header className="app-header">
        <h1>Fake Store Products</h1>
      </header>
      <main>
        <ProductList />
      </main>
    </div>
  )
}
