import { useState } from 'react'
import './App.css'

function App() {
  return (
    <main>
      <nav className="container mx-auto bg-white p-4 shadow-md sticky top-0 z-50" >
        <div className="flex justify-between items-center">
          <a href="#" className="font-bold text-xl text-gray-800">Qu!</a>
          <div>
            <ul className="flex space-x-6">
              <li><a href="#" className="text-gray-600 hover:text-gray-800">Game</a></li>
              <li><a href="#" className="text-gray-600 hover:text-gray-800">Queue</a></li>
              <li><a href="#" className="text-gray-600 hover:text-gray-800">Players</a></li>
              <li><a href="#" className="text-gray-600 hover:text-gray-800">Stats</a></li>
            </ul>
          </div>
        </div>
      </nav>
      <section className="container mx-auto p-8">
        <h1 className="text-3xl font-bold mb-8">Next Queue</h1>
        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec pulvinar dignissim orci quis vulputate. Integer sit amet porttitor nisl. Orci varius natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Donec sapien sapien, dignissim porta feugiat a, gravida id mi. Aliquam semper quam quis tortor tristique, ut facilisis ex vehicula. Vestibulum molestie lorem a odio accumsan, in pretium urna ullamcorper. In congue augue vitae sodales vulputate. Phasellus pharetra sapien ipsum, in varius nisl congue vitae. Praesent id viverra lacus, quis vehicula justo. Maecenas id diam ullamcorper ex venenatis tincidunt. Phasellus dictum sapien sit amet placerat pellentesque.</p>

<p>Fusce a vulputate turpis. Pellentesque euismod non leo id bibendum. Vivamus a est id tortor rutrum posuere eu faucibus dui. Maecenas feugiat justo commodo dictum euismod. Vivamus ut commodo ipsum. Duis ut vestibulum leo. Maecenas et nulla ornare, pellentesque sapien sit amet, sagittis turpis.</p>

<p>In hac habitasse platea dictumst. Phasellus maximus pretium laoreet. Proin volutpat nisl non orci luctus semper. Phasellus feugiat mauris ac tellus venenatis vestibulum. Vestibulum scelerisque leo felis, et gravida lacus vestibulum quis. Proin accumsan porta vehicula. Nullam at ante a ante molestie porttitor. Donec nec dui nec velit egestas porttitor. Praesent aliquet neque eget nisi mollis, vitae vehicula dolor feugiat. Proin consequat consectetur cursus. Vestibulum suscipit finibus erat sit amet dignissim. Curabitur pretium justo ut enim ullamcorper convallis. Suspendisse eget purus neque.</p>

<p>Praesent nec posuere augue. Fusce ullamcorper nisl nisi, in feugiat risus bibendum nec. Nunc ut nulla augue. Nulla vestibulum mauris tincidunt, auctor erat eget, molestie velit. Mauris pulvinar, nunc eget aliquet commodo, nibh elit euismod metus, a imperdiet diam lorem vitae massa. Nunc et enim vel lectus laoreet rhoncus sed at massa. Nullam vehicula eros semper metus semper lobortis. Integer dignissim ac mi eu rutrum. Proin sit amet est posuere, lobortis ipsum in, lobortis leo.</p>

<p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque at venenatis enim. Ut sit amet velit eu odio facilisis vehicula. Aliquam cursus pulvinar dignissim. Duis porta iaculis ante, non accumsan justo placerat vitae. Praesent in mi mi. Nullam tincidunt rhoncus ligula a malesuada. Nullam ullamcorper tempus est in vehicula. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Nam a neque ac ligula sodales efficitur. Aliquam dictum porta felis, ut consequat ex vestibulum vitae. In sollicitudin lorem odio, sit amet laoreet ante pulvinar ut. Donec ac arcu neque. Nulla sem metus, tincidunt non velit malesuada, viverra laoreet mi.</p>
      </section>
    </main>
  )
}

export default App
