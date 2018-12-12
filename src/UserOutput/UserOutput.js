import React from 'react';
import './UserOutput.css';

const userOutput = (props) => {
  return (
    <div className="UserOutput">
      <h2 onClick={props.click}>{props.userName}</h2>
      <p> Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc et ligula nisi. Duis cursus vulputate magna ut mattis. Nullam ex ex, iaculis ac interdum consequat, luctus vitae nibh. Ut in orci aliquam, ultrices est feugiat, fermentum magna. Morbi fringilla erat nec felis gravida molestie. Duis facilisis ex eget semper sollicitudin. Donec porta tortor libero, eu faucibus neque accumsan eget. Nunc augue erat, dictum ut consequat sit amet, auctor eu erat. Praesent nec mattis sem. Vivamus vel nunc ut magna dapibus lobortis porttitor eu dolor. Donec in maximus quam. </p>
      <p> Quisque porta lectus vitae arcu posuere gravida. Donec eget molestie ipsum. Donec commodo semper ipsum, at congue sem blandit id. Nunc justo risus, tempus sit amet risus nec, tincidunt interdum sem. In lobortis lacinia odio eget consectetur. Integer suscipit orci ligula, nec convallis lectus interdum a. Vivamus feugiat, sapien quis feugiat mattis, libero lorem cursus tortor, quis mollis metus urna vel velit. Quisque vulputate quam ante, vel luctus tellus finibus in. Etiam sed maximus ante, ac vulputate diam. In a tempus lectus, at vestibulum diam. Proin ut pulvinar metus. </p>
    </div>
)
};

export default userOutput;
