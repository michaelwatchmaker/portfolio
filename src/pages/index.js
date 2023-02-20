import { Link } from "gatsby";
import * as React from "react";
import Button from "../components/button";
import Navigation from "../components/nav";
import ArrowRight from "../images/ArrowRight";
import Cornhole from "../images/cornhole.gif";
import Beer from "../images/beer.jpg";
import Baseball from "../images/baseball.jpg";
import DiscThrow from "../images/disc-throw.jpg";
import "../styles/global.css";

const Home = () => {
  return (
    <div>
      <Navigation/>
      <main>
          <h1 className="left">Sup, I'm Michael ✌🏼
            <br/>
            <span className="header-alt">I discover and solve people problems to drive business outcomes</span>
          </h1> 
          <div className="section-about">
            <div className="section-content">
              <h2 className="left">Some of the other stuff I like to do 😄</h2>
              <Link to="/about">
                <Button variant="button alt">
                  About me
                  <ArrowRight/>
                </Button>
              </Link>
            </div>
            <div className="gallery">
              <img src={Baseball} alt="baseball" className="gallery-item a"/>
              <img src={Cornhole} alt="cornhole" className="gallery-item b"/>
              <img src={Beer} alt="beer" className="gallery-item c"/>
              <img src={DiscThrow} alt="disc-throw" className="gallery-item d"/>
            </div>
          </div>
        <div className="callout">
          <p className="body">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum rutrum nisl eget luctus pretium. Vivamus sit amet orci dapibus, auctor sapien vel, convallis eros. Interdum et malesuada fames ac ante ipsum primis in faucibus. Sed condimentum non odio vel scelerisque. Suspendisse potenti. Curabitur velit ipsum, imperdiet a semper a, egestas in neque. Donec iaculis ornare massa sit amet sagittis. Proin aliquam vulputate ultricies. Phasellus mollis dui malesuada, gravida nibh in, porta lorem. Aenean efficitur augue eu enim tincidunt, vitae pharetra nisl sollicitudin. Pellentesque laoreet risus sit amet lectus gravida hendrerit. In porta purus quis orci pharetra, at fermentum ligula egestas.

Nulla cursus diam nec mauris facilisis pellentesque. Donec mi orci, tincidunt eget mollis euismod, ornare vel orci. Nulla vitae urna viverra elit malesuada venenatis nec eget risus. Suspendisse potenti. Curabitur in ipsum sed lorem dictum auctor vel et sem. Mauris viverra porttitor pellentesque. Phasellus euismod laoreet tristique. Donec consectetur urna a libero sodales feugiat. Aliquam vitae arcu nisl. Vestibulum nibh nulla, efficitur quis leo quis, commodo vestibulum nisi. Nam ornare tortor vehicula, finibus lacus in, finibus elit. Curabitur dapibus congue nisi eu placerat. Nullam volutpat euismod metus, nec imperdiet diam tristique nec. Integer nec fermentum mauris, fermentum accumsan dolor. Nam in maximus arcu. Nam faucibus libero et neque mollis, in tempor enim porttitor.

Ut semper elit fringilla ornare sollicitudin. Phasellus in neque sed eros placerat tristique. Sed vulputate ipsum quis laoreet aliquet. Suspendisse potenti. Nullam vel blandit nibh, a luctus nibh. Integer dictum eros eu finibus tincidunt. Aenean vitae tortor elementum, blandit purus id, efficitur metus. Vestibulum a ante erat.

Proin egestas, lectus ac rhoncus viverra, diam felis facilisis erat, viverra varius elit magna ut lectus. Integer gravida porttitor diam, non vulputate felis vulputate et. Proin in ipsum ultricies, tempor libero in, rutrum leo. Curabitur nisi libero, molestie ac vehicula at, volutpat eget diam. Integer pulvinar ut eros at sodales. Pellentesque quis tempor est. Nam ac massa mollis, viverra ligula quis, mattis elit. Nulla facilisi. Pellentesque interdum tempus sollicitudin.

Nam tempus est ut turpis hendrerit accumsan. In nec molestie ex. Donec semper varius enim sed fringilla. Sed suscipit leo eget eleifend volutpat. Aliquam ornare risus a efficitur bibendum. In molestie enim at mauris sagittis, at placerat lorem porttitor. Ut accumsan accumsan tristique. Ut tempus mi ut mattis ultricies. Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Duis finibus tristique risus, a mattis neque congue sed. Duis at elit leo. Vestibulum facilisis, dolor eget rhoncus tincidunt, neque sapien cursus sapien, at vehicula erat mi non lectus.

Sed a dolor in ante pretium porttitor. Aenean elementum nisi urna, vel dictum quam dictum a. Pellentesque ac pellentesque mi. Nam faucibus aliquam efficitur. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia curae; Pellentesque augue ipsum, iaculis ut lectus quis, pharetra mollis augue. Nunc at erat libero. Sed et turpis ipsum. Proin elementum efficitur elit, at tempus mi condimentum ac. Nulla tempor porta accumsan.

Ut fringilla felis at neque imperdiet consequat. Ut ullamcorper tellus nec hendrerit dignissim. Donec molestie quis lorem in luctus. Phasellus at malesuada quam. Sed massa leo, egestas ac pulvinar id, porttitor vitae sapien. Praesent vestibulum, enim ac venenatis faucibus, augue magna finibus tortor, in ullamcorper lorem arcu non eros. Donec sit amet scelerisque augue. Mauris congue mi felis, posuere consectetur nisi gravida vel. Maecenas vehicula iaculis diam, vel ultricies justo dignissim at. Curabitur vulputate nisi ut vehicula molestie. Nam nec lectus in enim tristique sagittis et at metus. Phasellus lacinia justo odio, non pulvinar augue lacinia in. Morbi et laoreet arcu. Maecenas a nibh imperdiet, rhoncus sapien maximus, pellentesque elit. Quisque in est sed odio pulvinar interdum. Maecenas mi ipsum, tincidunt et fermentum eu, consectetur id orci.

Donec sit amet nunc semper, congue lectus vel, laoreet leo. Cras eget consequat nunc, et facilisis enim. Donec eget lorem eu ex aliquet molestie at eu felis. Phasellus nec nunc pretium, aliquet lectus sit amet, semper ante. Aliquam rutrum semper nisi, et ultricies quam consequat vitae. Donec porttitor dapibus eros at ornare. Praesent posuere facilisis enim et pretium. Sed ac elit nisi. Maecenas euismod urna purus, id tempus arcu lobortis id. Maecenas cursus arcu dolor, ac maximus mi faucibus vel. Vestibulum rutrum imperdiet neque non malesuada. Cras euismod neque in nisi facilisis, id iaculis metus finibus. Aliquam sagittis risus libero, non vestibulum orci posuere ut. Nunc ultrices tortor in urna hendrerit, at sollicitudin arcu efficitur. Nam facilisis bibendum nisl non cursus.</p>
        </div>
        </main>
        <footer>Footer</footer>
    </div>
  )
}

export default Home
