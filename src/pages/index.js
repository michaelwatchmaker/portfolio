import { Link } from "gatsby";
import * as React from "react";
import Button from "../components/button";
import Hero from "../components/hero";
import Navigation from "../components/nav";
import "../styles/global.css";

const IndexPage = () => {
  return (
    <div>
      <Navigation/>
      <main>
        <Hero>Hi 👋, I’m Michael.<br></br><span className="title-alt">I discover and design simple solutions to complex problems.</span></Hero>
        <Button variant="alt">
          <Link to="/about">About Me</Link>
        </Button>
        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam volutpat, risus a placerat tincidunt, sem velit luctus risus, at molestie tortor sem ac tortor. In at libero vestibulum, porttitor lorem ac, varius arcu. Ut ullamcorper libero vel fringilla feugiat. Morbi mi eros, vestibulum nec tincidunt et, dignissim quis sem. Proin sem quam, condimentum ac urna in, auctor vestibulum augue. Maecenas efficitur odio ligula, sit amet sodales diam pharetra id. Morbi ultrices, erat non laoreet sollicitudin, urna ante efficitur lorem, ut iaculis odio nunc et odio. Sed ut nisl porta, scelerisque mauris ac, tempor dolor. Phasellus rhoncus leo turpis, dignissim lacinia diam lobortis quis. Praesent ac placerat mi. Nulla hendrerit sit amet libero ut bibendum. Praesent et fermentum ante. Etiam congue cursus nisl, eget sodales turpis tristique eu. Sed velit neque, ornare non vulputate sed, porta id lectus. Ut lacus felis, dignissim at mauris nec, mollis tristique mauris. Integer ac velit dapibus, eleifend libero quis, vulputate eros.

Ut vel erat a mauris varius consectetur a sit amet ligula. Sed at ipsum tempus massa tincidunt porta non et ligula. Sed posuere rutrum luctus. Nullam bibendum ac enim ac blandit. Aliquam id faucibus lacus. Nulla est quam, vestibulum id condimentum sit amet, vehicula sed neque. Donec a sagittis nisi, id eleifend quam. Fusce pulvinar nisi a finibus posuere. Donec lacinia nisi at volutpat tincidunt. Duis arcu est, vehicula et lectus quis, efficitur pulvinar nisl. Aenean non tempor neque. Aenean urna libero, rutrum non suscipit non, mollis ac massa. Curabitur vitae iaculis massa. Pellentesque eget ullamcorper mauris. Nulla quis risus sed est tempor interdum.

Sed a ex ut nisi porttitor suscipit. Sed dignissim ornare neque vel venenatis. In eget est in nisl suscipit malesuada. Suspendisse elit urna, consequat convallis condimentum eget, fringilla vitae sem. Ut ut lectus commodo, vulputate diam facilisis, maximus dolor. Proin mollis nunc ut turpis vestibulum, non dictum ex aliquet. Sed molestie enim a nunc mattis consectetur. Proin congue at odio non maximus. Morbi dictum, sem a ullamcorper dictum, lectus augue maximus velit, tincidunt gravida elit nunc et ante. Sed nec lobortis neque. Morbi facilisis, elit sed aliquam sollicitudin, justo nisi mollis lorem, lacinia semper lacus neque quis dui.

Nam interdum dui id lacus bibendum feugiat. Proin commodo laoreet sodales. Mauris imperdiet placerat varius. Vivamus quis blandit velit. Suspendisse potenti. Aliquam elementum quam ut libero varius, eget laoreet leo vestibulum. Maecenas odio leo, pretium dignissim lectus vulputate, interdum tempor orci. Sed dictum nec orci et iaculis. Nunc aliquam erat non eros rhoncus, ut faucibus lectus tempus. Nam non mauris sed ex luctus eleifend. Aenean id mauris sit amet erat fermentum congue non mattis ligula. Fusce ornare in sem a blandit. Nullam erat lectus, fringilla feugiat nisi ut, pretium blandit nisi.

Etiam id congue leo, sed condimentum odio. Vestibulum porttitor tempus lobortis. Ut sollicitudin, urna vitae faucibus egestas, velit nisl posuere dolor, at blandit lacus augue fermentum eros. Morbi gravida venenatis congue. Aliquam erat volutpat. Vestibulum lacinia in est non pharetra. Quisque ut sapien bibendum, eleifend nunc eget, euismod orci. Aenean maximus eros et dignissim gravida. Phasellus quis lorem neque. Nam vulputate enim eget scelerisque blandit. Integer interdum, sem vel vulputate pulvinar, leo purus sagittis justo, vel tristique mi sem id erat. Cras volutpat, purus id malesuada molestie, nisi metus eleifend quam, at eleifend odio elit eu orci.

Ut sed magna risus. Vestibulum vitae aliquet arcu, in mattis felis. Vivamus sit amet auctor ante, sagittis efficitur nulla. Nam quis risus augue. Phasellus turpis lacus, bibendum vitae felis in, pretium efficitur elit. Proin quam nunc, sagittis a justo et, tempor porttitor augue. Nunc in placerat purus. Morbi semper lobortis tellus sit amet dignissim. Pellentesque semper tristique tristique. Suspendisse aliquet rutrum risus, nec ultrices sapien vehicula quis. Integer convallis purus sed sapien pretium, ac faucibus arcu viverra. Vestibulum vitae sem eget dolor aliquet pretium vitae porta diam. Suspendisse posuere purus augue, et hendrerit neque pharetra vel. Ut at finibus ante. Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas.</p>
Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam volutpat, risus a placerat tincidunt, sem velit luctus risus, at molestie tortor sem ac tortor. In at libero vestibulum, porttitor lorem ac, varius arcu. Ut ullamcorper libero vel fringilla feugiat. Morbi mi eros, vestibulum nec tincidunt et, dignissim quis sem. Proin sem quam, condimentum ac urna in, auctor vestibulum augue. Maecenas efficitur odio ligula, sit amet sodales diam pharetra id. Morbi ultrices, erat non laoreet sollicitudin, urna ante efficitur lorem, ut iaculis odio nunc et odio. Sed ut nisl porta, scelerisque mauris ac, tempor dolor. Phasellus rhoncus leo turpis, dignissim lacinia diam lobortis quis. Praesent ac placerat mi. Nulla hendrerit sit amet libero ut bibendum. Praesent et fermentum ante. Etiam congue cursus nisl, eget sodales turpis tristique eu. Sed velit neque, ornare non vulputate sed, porta id lectus. Ut lacus felis, dignissim at mauris nec, mollis tristique mauris. Integer ac velit dapibus, eleifend libero quis, vulputate eros.

Ut vel erat a mauris varius consectetur a sit amet ligula. Sed at ipsum tempus massa tincidunt porta non et ligula. Sed posuere rutrum luctus. Nullam bibendum ac enim ac blandit. Aliquam id faucibus lacus. Nulla est quam, vestibulum id condimentum sit amet, vehicula sed neque. Donec a sagittis nisi, id eleifend quam. Fusce pulvinar nisi a finibus posuere. Donec lacinia nisi at volutpat tincidunt. Duis arcu est, vehicula et lectus quis, efficitur pulvinar nisl. Aenean non tempor neque. Aenean urna libero, rutrum non suscipit non, mollis ac massa. Curabitur vitae iaculis massa. Pellentesque eget ullamcorper mauris. Nulla quis risus sed est tempor interdum.

Sed a ex ut nisi porttitor suscipit. Sed dignissim ornare neque vel venenatis. In eget est in nisl suscipit malesuada. Suspendisse elit urna, consequat convallis condimentum eget, fringilla vitae sem. Ut ut lectus commodo, vulputate diam facilisis, maximus dolor. Proin mollis nunc ut turpis vestibulum, non dictum ex aliquet. Sed molestie enim a nunc mattis consectetur. Proin congue at odio non maximus. Morbi dictum, sem a ullamcorper dictum, lectus augue maximus velit, tincidunt gravida elit nunc et ante. Sed nec lobortis neque. Morbi facilisis, elit sed aliquam sollicitudin, justo nisi mollis lorem, lacinia semper lacus neque quis dui.

Nam interdum dui id lacus bibendum feugiat. Proin commodo laoreet sodales. Mauris imperdiet placerat varius. Vivamus quis blandit velit. Suspendisse potenti. Aliquam elementum quam ut libero varius, eget laoreet leo vestibulum. Maecenas odio leo, pretium dignissim lectus vulputate, interdum tempor orci. Sed dictum nec orci et iaculis. Nunc aliquam erat non eros rhoncus, ut faucibus lectus tempus. Nam non mauris sed ex luctus eleifend. Aenean id mauris sit amet erat fermentum congue non mattis ligula. Fusce ornare in sem a blandit. Nullam erat lectus, fringilla feugiat nisi ut, pretium blandit nisi.

Etiam id congue leo, sed condimentum odio. Vestibulum porttitor tempus lobortis. Ut sollicitudin, urna vitae faucibus egestas, velit nisl posuere dolor, at blandit lacus augue fermentum eros. Morbi gravida venenatis congue. Aliquam erat volutpat. Vestibulum lacinia in est non pharetra. Quisque ut sapien bibendum, eleifend nunc eget, euismod orci. Aenean maximus eros et dignissim gravida. Phasellus quis lorem neque. Nam vulputate enim eget scelerisque blandit. Integer interdum, sem vel vulputate pulvinar, leo purus sagittis justo, vel tristique mi sem id erat. Cras volutpat, purus id malesuada molestie, nisi metus eleifend quam, at eleifend odio elit eu orci.

Ut sed magna risus.
      </main>
    </div>
  )
}

export default IndexPage
