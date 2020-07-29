import React from "react"
import "./tailwind.output.css"

function App() {
  return (
    <main className="grid grid-cols-main h-screen font-sans">
      {/* the colors, margins, fonts all match my design exactly and are predefined in tailwind.config.js */}
      <section className="m-md grid grid-cols-cards-sm md:grid-cols-cards gap-md">
        {[1, 2, 3, 4, 5, 6].map((value) => (
          <div className="bg-secondary text-center p-sm">card {value}</div>
        ))}
      </section>
      <aside className="bg-primary p-md">
        <h2 className="font-header text-xl mb-sm">Sidebar</h2>
        <p>
          It's not safe out here. It's wondrous, with treasures to satiate
          desires both subtle and gross; but it's not for the timid. A library
          serves no purpose unless someone is using it. We're a most promising
          species, Mr. Spock, as predators go. Did you know that? I frequently
          have my doubts. I don't. Not any more. And maybe in a thousand years
          or so, we'll be able to prove it. I object to intellect without
          discipline; I object to power without constructive purpose. It was the
          best of times, it was the worst of times.’ …Message, Spock?” “…None
          that I am conscious of — save, perhaps, for ‘Happy Birthday.‘ It’s a —
          far, far better thing I do than I have ever done before; a far better
          resting place I go to than I have ever known.” “…Is that a poem?”
          “…Mmm. Something Spock was trying to tell me — on my birthday.
        </p>
      </aside>
    </main>
  )
}

export default App
