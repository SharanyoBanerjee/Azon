import { useState, useEffect } from "react"

const products = [
  { id: 1, name: "Premium Smartphone", brand: "Apple", category: "Electronics", price: 80000, desc: "A powerful smartphone with a clear display." },
  { id: 2, name: "Air Fryer", brand: "Philips", category: "Kitchen", price: 9000, desc: "Healthy cooking with very little oil." },
  { id: 3, name: "Yoga Mat", brand: "Gaiam", category: "Sports", price: 2500, desc: "Non-slip surface for comfortable exercise." },
  { id: 4, name: "Wireless Headphones", brand: "Sony", category: "Electronics", price: 25000, desc: "Noise cancelling headphones with deep bass." },
  { id: 5, name: "Kitchen Skillet", brand: "Lodge", category: "Kitchen", price: 4000, desc: "Durable cast iron for even cooking." },
  { id: 6, name: "Dumbbell Set", brand: "Bowflex", category: "Sports", price: 5000, desc: "Adjustable weights for home workouts." },
  { id: 7, name: "Laptop Pro", brand: "Apple", category: "Electronics", price: 120000, desc: "Fast performance for work and creative tasks." },
  { id: 8, name: "Coffee Machine", brand: "Nescafe", category: "Kitchen", price: 12000, desc: "Brew professional coffee at home easily." },
  { id: 9, name: "Running Shoes", brand: "Nike", category: "Sports", price: 7000, desc: "Lightweight shoes for daily running." },
  { id: 10, name: "Smart Watch", brand: "Samsung", category: "Electronics", price: 30000, desc: "Track your fitness and stay connected." },
  { id: 11, name: "Food Blender", brand: "NutriBullet", category: "Kitchen", price: 6000, desc: "High speed motor for smooth drinks." },
  { id: 12, name: "Cricket Bat", brand: "Spartan", category: "Sports", price: 8500, desc: "Quality wood for powerful cricket shots." },
  { id: 13, name: "E-Reader", brand: "Amazon", category: "Electronics", price: 15000, desc: "Read books comfortably for many hours." },
  { id: 14, name: "Water Kettle", brand: "Prestige", category: "Kitchen", price: 1500, desc: "Boil water quickly with safety features." },
  { id: 15, name: "Tennis Racket", brand: "Yonex", category: "Sports", price: 3000, desc: "Balanced weight for better ball control." },
  { id: 16, name: "Smart Speaker", brand: "Amazon", category: "Electronics", price: 5000, desc: "Voice controlled assistant for your home." },
  { id: 17, name: "Chef Knife", brand: "Pigeon", category: "Kitchen", price: 1000, desc: "Sharp blade for precise food cutting." },
  { id: 18, name: "Soccer Ball", brand: "Adidas", category: "Sports", price: 2000, desc: "Standard size ball for practice and play." },
  { id: 19, name: "Tablet Pro", brand: "Apple", category: "Electronics", price: 55000, desc: "Portable device for browsing and drawing." },
  { id: 20, name: "Microwave", brand: "LG", category: "Kitchen", price: 11000, desc: "Heat and cook food in minutes." }
]

const Navbar = ({ page, setPage, cartItems, wishItems, searchVal, setSearchVal, darkOn, setDarkOn, orange, peach, cardBg, textCol, borderCol }) => {
  const cartCount = cartItems.length
  
  return (
    <div style={{ position: "sticky", top: 0, zIndex: 100, background: orange, height: "60px", display: "flex", alignItems: "center", padding: "0 24px", gap: 16 }}>
      <span onClick={() => setPage("home")} style={{ fontSize: 24, fontWeight: "bold", color: "white", cursor: "pointer" }}>
        <span style={{ color: peach }}>Az</span>on
      </span>
      
      <div style={{ flex: 1, display: "flex" }}>
        <input 
          type="text" 
          value={searchVal} 
          onChange={(e) => setSearchVal(e.target.value)} 
          placeholder="Search items..." 
          style={{ height: 34, padding: "0 10px", borderRadius: "4px 0 0 4px", border: "none", fontSize: 14, flex: 1, outline: "none" }}
        />
        <button style={{ background: peach, border: "none", borderRadius: "0 4px 4px 0", padding: "0 10px", cursor: "pointer", fontWeight: "bold" }}>Search</button>
      </div>

      <div style={{ display: "flex", gap: 12 }}>
        <button onClick={() => setPage("home")} style={{ background: "none", border: "none", color: "white", cursor: "pointer", fontSize: 13 }}>Home</button>
        <button onClick={() => setPage("wish")} style={{ background: "none", border: "none", color: "white", cursor: "pointer", fontSize: 13 }}>Wishlist ({wishItems.length})</button>
        <button onClick={() => setPage("cart")} style={{ background: "none", border: "none", color: "white", cursor: "pointer", fontSize: 13 }}>Cart ({cartCount})</button>
        <button onClick={() => setPage("settings")} style={{ background: "none", border: "none", color: "white", cursor: "pointer", fontSize: 13 }}>Account</button>
        <button onClick={() => setDarkOn(!darkOn)} style={{ background: "white", color: "black", border: "none", borderRadius: 4, padding: "4px 8px", cursor: "pointer", fontSize: 11 }}>Mode</button>
      </div>
    </div>
  )
}

const Footer = ({ darkOn, cardBg, textCol, mutedCol, borderCol, orange }) => (
  <div style={{ background: cardBg, borderTop: `1px solid ${borderCol}`, padding: "30px 20px", marginTop: 40 }}>
    <div style={{ display: "grid", gridTemplateColumns: "repeat(4, 1fr)", gap: 20 }}>
      <div>
        <h4 style={{ color: orange, marginBottom: 10 }}>Azon</h4>
        <a href="#" style={{ color: mutedCol, textDecoration: "none", fontSize: 12, display: "block", marginBottom: 5 }}>About</a>
        <a href="#" style={{ color: mutedCol, textDecoration: "none", fontSize: 12, display: "block", marginBottom: 5 }}>Jobs</a>
      </div>
      <div>
        <h4 style={{ color: textCol, marginBottom: 10 }}>Help</h4>
        <a href="#" style={{ color: mutedCol, textDecoration: "none", fontSize: 12, display: "block", marginBottom: 5 }}>Shipping</a>
        <a href="#" style={{ color: mutedCol, textDecoration: "none", fontSize: 12, display: "block", marginBottom: 5 }}>Returns</a>
      </div>
      <div>
        <h4 style={{ color: textCol, marginBottom: 10 }}>Legal</h4>
        <a href="#" style={{ color: mutedCol, textDecoration: "none", fontSize: 12, display: "block", marginBottom: 5 }}>Privacy</a>
        <a href="#" style={{ color: mutedCol, textDecoration: "none", fontSize: 12, display: "block", marginBottom: 5 }}>Terms</a>
      </div>
      <div>
        <h4 style={{ color: textCol, marginBottom: 10 }}>Social</h4>
        <a href="#" style={{ color: mutedCol, textDecoration: "none", fontSize: 12, display: "block", marginBottom: 5 }}>Facebook</a>
        <a href="#" style={{ color: mutedCol, textDecoration: "none", fontSize: 12, display: "block", marginBottom: 5 }}>Twitter</a>
      </div>
    </div>
    <div style={{ borderTop: `1px solid ${borderCol}`, paddingTop: 15, marginTop: 20, textAlign: "center", color: mutedCol, fontSize: 12 }}>
      2026 Azon Pvt. Ltd. | By Newton School  
    </div>
  </div>
)

const StarRating = ({ rating, onRate, size = 16 }) => {
  const [hoverStar, setHoverStar] = useState(0)
  return (
    <div style={{ display: "flex", gap: 2 }} onClick={(e) => onRate && e.stopPropagation()}>
      {[1, 2, 3, 4, 5].map(s => (
        <span 
          key={s}
          style={{ fontSize: size, cursor: onRate ? "pointer" : "default", color: s <= (hoverStar || rating) ? "#FF6B35" : "#cccccc" }}
          onMouseEnter={() => onRate && setHoverStar(s)}
          onMouseLeave={() => onRate && setHoverStar(0)}
          onClick={() => onRate && onRate(s)}
        >
          *
        </span>
      ))}
    </div>
  )
}

const ProductCard = ({ prod, cartItems, wishItems, ratings, onAddCart, onWishToggle, onRate, onView, darkOn, cardBg, textCol, mutedCol, borderCol, orange, peach }) => {
  const [hovered, setHovered] = useState(false)
  const inCart = cartItems.some(i => i.id === prod.id)
  const inWish = wishItems.includes(prod.id)
  const myRating = ratings[prod.id] || 0

  return (
    <div 
      onMouseEnter={() => setHovered(true)} 
      onMouseLeave={() => setHovered(false)}
      onClick={() => onView(prod)}
      style={{ background: cardBg, border: `1px solid ${borderCol}`, borderRadius: 8, overflow: "hidden", display: "flex", flexDirection: "column", cursor: "pointer", transition: "0.2s", transform: hovered ? "scale(1.02)" : "none", boxShadow: hovered ? "0 4px 10px rgba(0,0,0,0.1)" : "none" }}
    >
      <div style={{ background: darkOn ? "#333" : peach, height: 120, display: "flex", alignItems: "center", justifyContent: "center", position: "relative" }}>
        <span style={{ fontWeight: "bold", fontSize: 20 }}>PHOTO</span>
        <button 
          onClick={(e) => { e.stopPropagation(); onWishToggle(prod.id); }}
          style={{ position: "absolute", top: 5, right: 5, background: "white", border: "1px solid #ddd", borderRadius: 4, cursor: "pointer", fontSize: 10, padding: "2px 4px" }}
        >
          {inWish ? "SAVED" : "WISH"}
        </button>
      </div>
      <div style={{ padding: 12, display: "flex", flexDirection: "column", gap: 4 }}>
        <span style={{ fontSize: 10, fontWeight: "bold", color: orange }}>{prod.brand}</span>
        <span style={{ fontSize: 14, fontWeight: "bold", color: textCol }}>{prod.name}</span>
        <span style={{ fontSize: 12, color: mutedCol }}>{prod.category}</span>
        <StarRating rating={myRating} onRate={(s) => onRate(prod.id, s)} size={14} />
        <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", marginTop: 10 }}>
          <span style={{ fontSize: 16, fontWeight: "bold", color: textCol }}>Rs. {prod.price}</span>
          <button 
            onClick={(e) => { e.stopPropagation(); onAddCart(prod); }}
            style={{ background: inCart ? "green" : orange, color: "white", border: "none", borderRadius: 4, padding: "5px 10px", fontSize: 11, cursor: "pointer" }}
          >
            {inCart ? "Added" : "Add"}
          </button>
        </div>
      </div>
    </div>
  )
}

export default function App() {
  const [page, setPage] = useState("home")
  const [cartItems, setCartItems] = useState([])
  const [wishItems, setWishItems] = useState([])
  const [ratings, setRatings] = useState({})
  const [darkOn, setDarkOn] = useState(false)
  const [searchVal, setSearchVal] = useState("")
  const [userName, setUserName] = useState("Azon User")
  const [viewProd, setViewProd] = useState(null)

  const orange = "#FF6B35"
  const peach = "#FFDAB9"
  const darkBg = "#1a1a1a"
  const darkCard = "#2a2a2a"
  const bg = darkOn ? darkBg : "#f5f5f5"
  const cardBg = darkOn ? darkCard : "#ffffff"
  const textCol = darkOn ? "#ffffff" : "#111111"
  const mutedCol = darkOn ? "#aaaaaa" : "#666666"
  const borderCol = darkOn ? "#333333" : "#e0e0e0"

  const renderPage = () => {
    if (page === "home") return <div style={{ padding: 40, textAlign: "center", color: textCol }}>Home Page Under Construction</div>
    if (page === "cart") return <div style={{ padding: 40, textAlign: "center", color: textCol }}>Shopping Cart Empty</div>
    if (page === "wish") return <div style={{ padding: 40, textAlign: "center", color: textCol }}>Wishlist Empty</div>
    if (page === "settings") return <div style={{ padding: 40, textAlign: "center", color: textCol }}>User Settings</div>
    return null
  }

  return (
    <div style={{ minHeight: "100vh", background: bg, color: textCol, fontFamily: "sans-serif" }}>
      <Navbar 
        page={page} setPage={setPage} 
        cartItems={cartItems} wishItems={wishItems} 
        searchVal={searchVal} setSearchVal={setSearchVal} 
        darkOn={darkOn} setDarkOn={setDarkOn} 
        orange={orange} peach={peach} 
        cardBg={cardBg} textCol={textCol} borderCol={borderCol} 
      />
      
      <div style={{ maxWidth: 1000, margin: "0 auto" }}>
        {renderPage()}
      </div>

      <Footer darkOn={darkOn} cardBg={cardBg} textCol={textCol} mutedCol={mutedCol} borderCol={borderCol} orange={orange} />
    </div>
  )
}
