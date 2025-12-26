 const Nav = () => {

  // Images:- https://punjabtihaas.blogspot.com/2025/12/assests.html

  return (
    <nav>
        <div className="left">
            <img  src="https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEiJqRuD1dCgVUZy_ACioqGBoryHwrPneFIdh9QkLmW4Q2L5lVIhRjMAUtGPx9216D9Mn8bq719gEz5UMHcBQc0CGSlmy70rSmI1QHLFst0YP7Cg3AdTLtQk_GNo6EjPfYwgSf9CKvRf3jrghhkld7Cd8UchfVTzuuxPUBNdP4GM42LFUiRN_Phyphenhyphenv1Li_WAJ/s320/logo.png" alt="logo" />
            <p>SPINTIP</p>
        </div>
        <div className="center">
          <a href="#">How It Works</a>
          <a href="#">For Players</a>
          <a href="#">For Coachers</a>
          <a href="#">Pricing</a>
          <a href="#">Testimonials</a>
          <a href="#">Q&A</a>
        </div>
        <div className="right">
          <button>Get Started <i className="ri-arrow-right-line"></i></button>
        </div>
    </nav>
  )
}

export default Nav