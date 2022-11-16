import React from "react"
import { Link } from "react-router-dom"

function BookList() {
	return (
		<>
			<div>
				<h1>BookList page</h1>
			</div>
			<nav>
				<ul>
					<li>
						<Link to="/books/1">Book 1</Link>
					</li>
					<li>
						<Link to="/books/2">Book 2</Link>
					</li>
				</ul>
			</nav>
		</>
	)
}

export default BookList
