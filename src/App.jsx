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

const Icon = ({ name, size = 18, color = "currentColor" }) => {
  const icons = {
    search: <path d="M21 21l-4.35-4.35M19 11a8 8 0 11-16 0 8 8 0 0116 0z" />,
    cart: <path d="M6 2L3 6v14a2 2 0 002 2h14a2 2 0 002-2V6l-3-4H6zM3 6h18M16 10a4 4 0 01-8 0" />,
    heart: <path d="M20.84 4.61a5.5 5.5 0 00-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 00-7.78 7.78l1.06 1.06L12 21.23l8.78-8.78 1.06-1.06a5.5 5.5 0 000-7.78z" />,
    user: <path d="M20 21v-2a4 4 0 00-4-4H8a4 4 0 00-4 4v2M12 11a4 4 0 100-8 4 4 0 000 8z" />,
    trash: <path d="M3 6h18M19 6v14a2 2 0 01-2 2H7a2 2 0 01-2-2V6m3 0V4a2 2 0 012-2h4a2 2 0 012 2v2" />,
    plus: <path d="M12 5v14M5 12h14" />,
    minus: <path d="M5 12h14" />,
    close: <path d="M18 6L6 18M6 6l12 12" />,
    laptop: <path d="M2 16h20M4 6h16v10H4zM8 20h8" />,
    kitchen: <path d="M4 11a1 1 0 011 1v1h14v-1a1 1 0 112 0v5a2 2 0 01-2 2H5a2 2 0 01-2-2v-5a1 1 0 011-1zM9 5l7 0M12 5l0 6" />,
    sports: <><circle cx="12" cy="12" r="10" /><path d="M12 2a15.3 15.3 0 010 20M2 12a15.3 15.3 0 0120 0" /></>,
    package: <path d="M12.89 1.45l8 4.6a2 2 0 011 1.73v9.24a2 2 0 01-1 1.73l-8 4.6a2 2 0 01-2 0l-8-4.6a2 2 0 01-1-1.73V7.78a2 2 0 011-1.73l8-4.6a2 2 0 012 0z" />
  }
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke={color} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      {icons[name] || null}
    </svg>
  )
}

const Navbar = ({ page, setPage, cartItems, wishItems, searchVal, setSearchVal, darkOn, setDarkOn, orange, peach, cardBg, textCol, borderCol }) => {
  const cartCount = cartItems.reduce((s, i) => s + i.qty, 0)
  return (
    <div style={{ position: "sticky", top: 0, zIndex: 100, background: orange, height: "60px", display: "flex", alignItems: "center", padding: "0 24px", gap: 16 }}>
      <span onClick={() => setPage("home")} style={{ fontSize: 24, fontWeight: "bold", color: "white", cursor: "pointer" }}>
        <span style={{ color: peach }}>Az</span>on
      </span>
      <div style={{ flex: 1, display: "flex" }}>
        <input 
          type="text" value={searchVal} onChange={(e) => setSearchVal(e.target.value)} 
          placeholder="Search items..." 
          style={{ height: 34, padding: "0 10px", borderRadius: "4px 0 0 4px", border: "none", fontSize: 14, flex: 1, outline: "none" }}
        />
        <button style={{ background: peach, border: "none", borderRadius: "0 4px 4px 0", padding: "0 10px", cursor: "pointer", fontWeight: "bold" }}>Search</button>
      </div>
      <div style={{ display: "flex", gap: 12, alignItems: "center" }}>
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
          ★
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
  const getIcon = (cat) => {
    if (cat === "Electronics") return "laptop"
    if (cat === "Kitchen") return "kitchen"
    if (cat === "Sports") return "sports"
    return "package"
  }
  return (
    <div 
      onMouseEnter={() => setHovered(true)} onMouseLeave={() => setHovered(false)} onClick={() => onView(prod)}
      style={{ background: cardBg, border: `1px solid ${borderCol}`, borderRadius: 8, overflow: "hidden", display: "flex", flexDirection: "column", cursor: "pointer", transition: "0.2s", transform: hovered ? "scale(1.02)" : "none" }}
    >
      <div style={{ background: darkOn ? "#333" : peach, height: 120, display: "flex", alignItems: "center", justifyContent: "center", position: "relative" }}>
        <Icon name={getIcon(prod.category)} size={60} color={darkOn ? "white" : orange} />
        <button 
          onClick={(e) => { e.stopPropagation(); onWishToggle(prod.id); }}
          style={{ position: "absolute", top: 8, right: 8, background: "white", border: "1px solid #ddd", borderRadius: 4, cursor: "pointer", fontSize: 12, padding: "4px" }}
        >
          <Icon name="heart" size={14} color={inWish ? orange : "#ccc"} />
        </button>
      </div>
      <div style={{ padding: 12, display: "flex", flexDirection: "column", gap: 4 }}>
        <span style={{ fontSize: 10, fontWeight: "bold", color: orange }}>{prod.brand}</span>
        <span style={{ fontSize: 14, fontWeight: "bold", color: textCol }}>{prod.name}</span>
        <span style={{ fontSize: 12, color: mutedCol }}>{prod.category}</span>
        <StarRating rating={myRating} onRate={(s) => onRate(prod.id, s)} size={14} />
        <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", marginTop: 10 }}>
          <span style={{ fontSize: 16, fontWeight: "bold", color: textCol }}>₹{prod.price.toLocaleString()}</span>
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

const HomePage = ({ products, cartItems, wishItems, ratings, onAddCart, onWishToggle, onRate, onView, searchVal, darkOn, cardBg, textCol, mutedCol, borderCol, orange, peach }) => {
  const [selCategory, setSelCategory] = useState("All")
  const [sortVal, setSortVal] = useState("default")
  let shown = products.filter(p => {
    const matchCat = selCategory === "All" || p.category === selCategory
    const matchSearch = p.name.toLowerCase().includes(searchVal.toLowerCase()) || p.brand.toLowerCase().includes(searchVal.toLowerCase())
    return matchCat && matchSearch
  })
  if (sortVal === "name-az") shown = [...shown].sort((a,b) => a.name.localeCompare(b.name))
  else if (sortVal === "name-za") shown = [...shown].sort((a,b) => b.name.localeCompare(a.name))
  else if (sortVal === "price-low") shown = [...shown].sort((a,b) => a.price - b.price)
  else if (sortVal === "price-high") shown = [...shown].sort((a,b) => b.price - a.price)
  else if (sortVal === "rated") shown = [...shown].sort((a,b) => (ratings[b.id] || 0) - (ratings[a.id] || 0))

  return (
    <div>
      <div style={{ background: "linear-gradient(135deg, #FF6B35, #FFDAB9)", borderRadius: 16, padding: "28px 32px", margin: "20px 20px 0 20px", display: "flex", justifyContent: "space-between", alignItems: "center" }}>
        <div>
          <div style={{ color: "white", opacity: 0.8, fontSize: 12 }}>WELCOME TO</div>
          <h1 style={{ color: "white", fontWeight: 800, fontSize: 32, margin: 0 }}>Azon Store</h1>
          <p style={{ color: "white", margin: "5px 0" }}>Great deals on Electronics, Sports & Kitchen</p>
          <div style={{ background: "white", color: orange, padding: "4px 10px", borderRadius: 20, display: "inline-block", fontSize: 12, fontWeight: "bold" }}>
            {products.length} Products
          </div>
        </div>
        <Icon name="package" size={90} color="white" />
      </div>
      <div style={{ margin: "16px 20px", padding: "12px 16px", background: cardBg, border: `1px solid ${borderCol}`, borderRadius: 12, display: "flex", gap: 12, alignItems: "center", flexWrap: "wrap" }}>
        <span style={{ color: mutedCol, fontSize: 13 }}>Category:</span>
        {["All", "Electronics", "Sports", "Kitchen"].map(cat => (
          <button key={cat} onClick={() => setSelCategory(cat)} style={{ padding: "5px 14px", borderRadius: 20, border: "none", fontWeight: 600, fontSize: 13, cursor: "pointer", background: selCategory === cat ? orange : (darkOn ? "#333" : "#f0f0f0"), color: selCategory === cat ? "white" : textCol }}>{cat}</button>
        ))}
        <div style={{ marginLeft: "auto", display: "flex", alignItems: "center", gap: 8 }}>
          <span style={{ color: mutedCol, fontSize: 13 }}>Sort by:</span>
          <select value={sortVal} onChange={(e) => setSortVal(e.target.value)} style={{ padding: "6px 10px", borderRadius: 8, border: `1px solid ${borderCol}`, background: cardBg, color: textCol, fontSize: 13 }}>
            <option value="default">Default</option>
            <option value="name-az">Name A-Z</option>
            <option value="name-za">Name Z-A</option>
            <option value="price-low">Price ↑</option>
            <option value="price-high">Price ↓</option>
            <option value="rated">My Ratings</option>
          </select>
        </div>
      </div>
      <div style={{ margin: "8px 20px 12px 20px", fontSize: 13, color: mutedCol }}>Showing {shown.length} products</div>
      {shown.length === 0 ? (
        <div style={{ padding: 60, textAlign: "center" }}>
          <Icon name="search" size={60} color={mutedCol} />
          <h3 style={{ color: textCol }}>No products found</h3>
          <p style={{ color: mutedCol }}>Try a different search or category</p>
        </div>
      ) : (
        <div style={{ margin: "0 20px", display: "grid", gridTemplateColumns: "repeat(auto-fill, minmax(215px, 1fr))", gap: 18 }}>
          {shown.map(p => (
            <ProductCard key={p.id} prod={p} cartItems={cartItems} wishItems={wishItems} ratings={ratings} onAddCart={onAddCart} onWishToggle={onWishToggle} onRate={onRate} onView={onView} darkOn={darkOn} cardBg={cardBg} textCol={textCol} mutedCol={mutedCol} borderCol={borderCol} orange={orange} peach={peach} />
          ))}
        </div>
      )}
    </div>
  )
}

const CartPage = ({ cartItems, onUpdateQty, onRemove, onClearCart, darkOn, cardBg, textCol, mutedCol, borderCol, orange, peach, setToastMsg }) => {
  const totalPrice = cartItems.reduce((sum, i) => sum + i.price * i.qty, 0)
  const totalQty = cartItems.reduce((sum, i) => sum + i.qty, 0)
  const getIcon = (cat) => {
    if (cat === "Electronics") return "laptop"
    if (cat === "Kitchen") return "kitchen"
    if (cat === "Sports") return "sports"
    return "package"
  }
  return (
    <div style={{ maxWidth: 800, margin: "0 auto", padding: "24px 20px" }}>
      <h2 style={{ color: textCol }}>Your Cart</h2>
      <p style={{ color: mutedCol, fontSize: 14 }}>{totalQty} item(s)</p>
      {cartItems.length === 0 ? (
        <div style={{ background: cardBg, border: `1px solid ${borderCol}`, borderRadius: 16, padding: 60, textAlign: "center" }}>
          <Icon name="cart" size={60} color={mutedCol} />
          <h3 style={{ color: textCol }}>Your cart is empty</h3>
          <p style={{ color: mutedCol }}>Go add something!</p>
        </div>
      ) : (
        <>
          {cartItems.map(item => (
            <div key={item.id} style={{ background: cardBg, border: `1px solid ${borderCol}`, borderRadius: 12, padding: "14px 18px", display: "flex", alignItems: "center", gap: 14, marginBottom: 10 }}>
              <div style={{ background: darkOn ? "#333" : peach + "44", borderRadius: 8, width: 64, height: 64, display: "flex", alignItems: "center", justifyContent: "center" }}>
                <Icon name={getIcon(item.category)} size={40} color={orange} />
              </div>
              <div style={{ flex: 1 }}>
                <div style={{ fontWeight: 600, color: textCol }}>{item.name}</div>
                <div style={{ fontSize: 13, color: mutedCol }}>{item.brand} • {item.category}</div>
              </div>
              <div style={{ display: "flex", alignItems: "center", gap: 8 }}>
                <button onClick={() => onUpdateQty(item.id, -1)} style={{ width: 28, height: 28, borderRadius: 6, border: `1px solid ${borderCol}`, background: cardBg, cursor: "pointer", color: textCol }}>-</button>
                <span style={{ fontWeight: 700, minWidth: 20, textAlign: "center" }}>{item.qty}</span>
                <button onClick={() => onUpdateQty(item.id, 1)} style={{ width: 28, height: 28, borderRadius: 6, border: `1px solid ${borderCol}`, background: cardBg, cursor: "pointer", color: textCol }}>+</button>
              </div>
              <div style={{ fontWeight: 700, fontSize: 15, minWidth: 80, textAlign: "right" }}>₹{(item.price * item.qty).toLocaleString()}</div>
              <button onClick={() => onRemove(item.id)} style={{ background: "none", border: "none", cursor: "pointer", color: "#ef4444" }}>
                <Icon name="trash" size={20} />
              </button>
            </div>
          ))}
          <div style={{ background: cardBg, border: `1px solid ${borderCol}`, borderRadius: 16, padding: 22, marginTop: 20 }}>
            <div style={{ display: "flex", justifyContent: "space-between", marginBottom: 8, fontSize: 14 }}>
              <span style={{ color: mutedCol }}>Subtotal</span>
              <span style={{ color: textCol }}>₹{totalPrice.toLocaleString()}</span>
            </div>
            <div style={{ display: "flex", justifyContent: "space-between", marginBottom: 12, fontSize: 14 }}>
              <span style={{ color: mutedCol }}>Delivery</span>
              <span style={{ color: "#4CAF50" }}>FREE</span>
            </div>
            <div style={{ borderTop: `1px solid ${borderCol}`, paddingTop: 12, marginBottom: 16, display: "flex", justifyContent: "space-between" }}>
              <span style={{ fontSize: 18, fontWeight: 700 }}>Total</span>
              <span style={{ fontSize: 18, fontWeight: 700 }}>₹{totalPrice.toLocaleString()}</span>
            </div>
            <div style={{ display: "flex", gap: 12 }}>
              <button onClick={onClearCart} style={{ background: "#ef4444", color: "white", border: "none", borderRadius: 8, padding: "10px", fontWeight: 600, flex: 1, cursor: "pointer" }}>Clear</button>
              <button onClick={() => setToastMsg("Order placed! 🎉")} style={{ background: orange, color: "white", border: "none", borderRadius: 8, padding: "10px", fontWeight: 600, flex: 2, cursor: "pointer" }}>Checkout</button>
            </div>
          </div>
        </>
      )}
    </div>
  )
}

const WishPage = ({ wishItems, products, cartItems, ratings, onAddCart, onWishToggle, onRate, onView, darkOn, cardBg, textCol, mutedCol, borderCol, orange, peach }) => {
  const wishedProds = products.filter(p => wishItems.includes(p.id))
  return (
    <div style={{ maxWidth: 1200, margin: "0 auto", padding: "24px 20px" }}>
      <h2 style={{ color: textCol }}>Your Wishlist</h2>
      {wishedProds.length === 0 ? (
        <div style={{ background: cardBg, border: `1px solid ${borderCol}`, borderRadius: 16, padding: 60, textAlign: "center" }}>
          <Icon name="heart" size={60} color={mutedCol} />
          <h3 style={{ color: textCol }}>Nothing saved yet</h3>
        </div>
      ) : (
        <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fill, minmax(215px, 1fr))", gap: 18 }}>
          {wishedProds.map(p => (
            <ProductCard key={p.id} prod={p} cartItems={cartItems} wishItems={wishItems} ratings={ratings} onAddCart={onAddCart} onWishToggle={onWishToggle} onRate={onRate} onView={onView} darkOn={darkOn} cardBg={cardBg} textCol={textCol} mutedCol={mutedCol} borderCol={borderCol} orange={orange} peach={peach} />
          ))}
        </div>
      )}
    </div>
  )
}

const SettingsPage = ({ userName, setUserName, darkOn, setDarkOn, cartItems, wishItems, ratings, setCartItems, setWishItems, setRatings, cardBg, textCol, mutedCol, borderCol, orange, peach }) => {
  const [editOn, setEditOn] = useState(false)
  const [tempName, setTempName] = useState(userName)
  return (
    <div style={{ maxWidth: 680, margin: "0 auto", padding: "24px 20px" }}>
      <h2 style={{ color: textCol }}>Account Settings</h2>
      <div style={{ background: cardBg, border: `1px solid ${borderCol}`, borderRadius: 16, padding: 24, marginBottom: 18 }}>
        <div style={{ display: "flex", gap: 16, alignItems: "center", marginBottom: 16 }}>
          <div style={{ width: 60, height: 60, borderRadius: "50%", background: orange, display: "flex", alignItems: "center", justifyContent: "center", fontSize: 24, fontWeight: 700, color: "white" }}>{userName.charAt(0)}</div>
          <div><div style={{ fontSize: 18, fontWeight: 700 }}>{userName}</div><div style={{ fontSize: 13, color: mutedCol }}>Azon Member</div></div>
        </div>
        {!editOn ? (
          <button onClick={() => setEditOn(true)} style={{ border: `1px solid ${borderCol}`, background: cardBg, padding: "7px 16px", borderRadius: 8, cursor: "pointer", fontSize: 13, color: textCol }}>Edit Name</button>
        ) : (
          <div style={{ display: "flex", gap: 8 }}>
            <input value={tempName} onChange={e => setTempName(e.target.value)} style={{ flex: 1, padding: "8px", borderRadius: 8, border: `1px solid ${orange}`, background: cardBg, color: textCol }} />
            <button onClick={() => { setUserName(tempName); setEditOn(false); }} style={{ background: orange, color: "white", border: "none", borderRadius: 8, padding: "8px 14px", cursor: "pointer" }}>Save</button>
          </div>
        )}
      </div>
      <div style={{ background: cardBg, border: `1px solid ${borderCol}`, borderRadius: 16, padding: 20, display: "flex", justifyContent: "space-between", alignItems: "center" }}>
        <span>Dark Mode</span>
        <button onClick={() => setDarkOn(!darkOn)} style={{ background: darkOn ? orange : "#ddd", border: "none", borderRadius: 20, padding: "8px 20px", cursor: "pointer" }}>{darkOn ? "ON" : "OFF"}</button>
      </div>
      <div style={{ background: cardBg, border: `1px solid ${borderCol}`, borderRadius: 16, padding: 20, marginTop: 18 }}>
        <h4 style={{ margin: "0 0 14px 0" }}>Activity</h4>
        <div style={{ display: "flex", gap: 20 }}>
          <div><div style={{ fontSize: 20, fontWeight: 700 }}>{cartItems.length}</div><div style={{ fontSize: 12, color: mutedCol }}>Cart</div></div>
          <div><div style={{ fontSize: 20, fontWeight: 700 }}>{wishItems.length}</div><div style={{ fontSize: 12, color: mutedCol }}>Wish</div></div>
          <div><div style={{ fontSize: 20, fontWeight: 700 }}>{Object.keys(ratings).length}</div><div style={{ fontSize: 12, color: mutedCol }}>Rated</div></div>
        </div>
      </div>
    </div>
  )
}

const ProductModal = ({ prod, cartItems, wishItems, ratings, onAddCart, onWishToggle, onRate, onClose, darkOn, cardBg, textCol, mutedCol, borderCol, orange, peach }) => {
  const inCart = cartItems.some(i => i.id === prod.id)
  const inWish = wishItems.includes(prod.id)
  const myRating = ratings[prod.id] || 0
  const getIcon = (cat) => {
    if (cat === "Electronics") return "laptop"
    if (cat === "Kitchen") return "kitchen"
    if (cat === "Sports") return "sports"
    return "package"
  }
  return (
    <div onClick={onClose} style={{ position: "fixed", inset: 0, background: "rgba(0,0,0,0.5)", zIndex: 500, display: "flex", alignItems: "center", justifyContent: "center", padding: 20 }}>
      <div onClick={e => e.stopPropagation()} style={{ background: cardBg, borderRadius: 16, maxWidth: 500, width: "100%", overflow: "hidden" }}>
        <div style={{ background: peach, height: 180, display: "flex", alignItems: "center", justifyContent: "center" }}>
          <Icon name={getIcon(prod.category)} size={100} color={orange} />
        </div>
        <div style={{ padding: 24 }}>
          <div style={{ color: orange, fontWeight: "bold", fontSize: 11 }}>{prod.brand}</div>
          <h2 style={{ margin: "4px 0 8px 0" }}>{prod.name}</h2>
          <p style={{ color: mutedCol, fontSize: 14, lineHeight: 1.6 }}>{prod.desc}</p>
          <StarRating rating={myRating} onRate={(s) => onRate(prod.id, s)} size={22} />
          <div style={{ fontSize: 24, fontWeight: 700, margin: "16px 0" }}>₹{prod.price.toLocaleString()}</div>
          <div style={{ display: "flex", gap: 10 }}>
            <button onClick={() => onAddCart(prod)} style={{ flex: 1, background: orange, color: "white", border: "none", borderRadius: 8, padding: "12px", fontWeight: "bold", cursor: "pointer" }}>{inCart ? "Add More" : "Add to Cart"}</button>
            <button onClick={() => onWishToggle(prod.id)} style={{ width: 44, background: "none", border: `1px solid ${borderCol}`, borderRadius: 8, cursor: "pointer" }}>
              <Icon name="heart" size={20} color={inWish ? orange : "#ccc"} />
            </button>
            <button onClick={onClose} style={{ width: 44, background: "none", border: `1px solid ${borderCol}`, borderRadius: 8, cursor: "pointer" }}>✕</button>
          </div>
        </div>
      </div>
    </div>
  )
}

const Toast = ({ msg }) => {
  if (!msg) return null
  return (
    <div style={{ position: "fixed", bottom: 20, left: "50%", transform: "translateX(-50%)", background: "#333", color: "white", padding: "10px 20px", borderRadius: 8, zIndex: 1000, fontSize: 14 }}>{msg}</div>
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
  const [toastMsg, setToastMsg] = useState("")

  useEffect(() => {
    const savedCart = localStorage.getItem("azon-cart")
    const savedWish = localStorage.getItem("azon-wish")
    const savedRatings = localStorage.getItem("azon-ratings")
    const savedDark = localStorage.getItem("azon-dark")
    const savedName = localStorage.getItem("azon-username")
    if (savedCart) setCartItems(JSON.parse(savedCart))
    if (savedWish) setWishItems(JSON.parse(savedWish))
    if (savedRatings) setRatings(JSON.parse(savedRatings))
    if (savedDark) setDarkOn(JSON.parse(savedDark))
    if (savedName) setUserName(savedName)
  }, [])

  useEffect(() => { localStorage.setItem("azon-cart", JSON.stringify(cartItems)) }, [cartItems])
  useEffect(() => { localStorage.setItem("azon-wish", JSON.stringify(wishItems)) }, [wishItems])
  useEffect(() => { localStorage.setItem("azon-ratings", JSON.stringify(ratings)) }, [ratings])
  useEffect(() => { localStorage.setItem("azon-dark", JSON.stringify(darkOn)) }, [darkOn])

  useEffect(() => {
    if (toastMsg === "") return
    const timer = setTimeout(() => setToastMsg(""), 2500)
    return () => clearTimeout(timer)
  }, [toastMsg])

  function addToCart(prod) {
    setCartItems(prev => {
      const exists = prev.find(i => i.id === prod.id)
      if (exists) { return prev.map(i => i.id === prod.id ? {...i, qty: i.qty + 1} : i) }
      return [...prev, {...prod, qty: 1}]
    })
    setToastMsg("Added to cart!")
  }

  function updateQty(id, delta) {
    setCartItems(prev => prev.map(i => i.id === id ? {...i, qty: i.qty + delta} : i).filter(i => i.qty > 0))
  }

  function removeFromCart(id) { setCartItems(prev => prev.filter(i => i.id !== id)) }

  function clearCart() { setCartItems([]) }

  function wishToggle(id) {
    setWishItems(prev => {
      if (prev.includes(id)) { setToastMsg("Removed from wishlist"); return prev.filter(w => w !== id) }
      setToastMsg("Added to wishlist!"); return [...prev, id]
    })
  }

  function rateProduct(id, star) { setRatings(prev => ({...prev, [id]: star})); setToastMsg("Rating saved!") }

  const orange = "#FF6B35", peach = "#FFDAB9", darkBg = "#1a1a1a", darkCard = "#2a2a2a"
  const bg = darkOn ? darkBg : "#f5f5f5", cardBg = darkOn ? darkCard : "#ffffff", textCol = darkOn ? "#ffffff" : "#111111", mutedCol = darkOn ? "#aaaaaa" : "#666666", borderCol = darkOn ? "#333333" : "#e0e0e0"

  function renderPage() {
    const props = { products, cartItems, wishItems, ratings, onAddCart: addToCart, onWishToggle: wishToggle, onRate: rateProduct, onView: setViewProd, searchVal, darkOn, cardBg, textCol, mutedCol, borderCol, orange, peach, setToastMsg, onUpdateQty: updateQty, onRemove: removeFromCart, onClearCart: clearCart, userName, setUserName, setCartItems, setWishItems, setRatings }
    if (page === "home") return <HomePage {...props} />
    if (page === "cart") return <CartPage {...props} />
    if (page === "wish") return <WishPage {...props} />
    if (page === "settings") return <SettingsPage {...props} />
    return null
  }

  return (
    <div style={{ minHeight: "100vh", background: bg, color: textCol, fontFamily: "sans-serif" }}>
      <Navbar page={page} setPage={setPage} cartItems={cartItems} wishItems={wishItems} searchVal={searchVal} setSearchVal={setSearchVal} darkOn={darkOn} setDarkOn={setDarkOn} orange={orange} peach={peach} cardBg={cardBg} textCol={textCol} borderCol={borderCol} />
      <div style={{ maxWidth: 1000, margin: "0 auto" }}>{renderPage()}</div>
      {viewProd && <ProductModal prod={viewProd} cartItems={cartItems} wishItems={wishItems} ratings={ratings} onAddCart={addToCart} onWishToggle={wishToggle} onRate={rateProduct} onClose={() => setViewProd(null)} darkOn={darkOn} cardBg={cardBg} textCol={textCol} mutedCol={mutedCol} borderCol={borderCol} orange={orange} peach={peach} />}
      <Toast msg={toastMsg} />
      <Footer darkOn={darkOn} cardBg={cardBg} textCol={textCol} mutedCol={mutedCol} borderCol={borderCol} orange={orange} />
    </div>
  )
}
