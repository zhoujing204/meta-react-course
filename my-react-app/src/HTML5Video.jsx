import myVideo from './assets/dropout1_kiank.mp4';

function HTML5Video() {
  return (
    <div>
      <video src={myVideo} controls />
    </div>
  );
}

export default HTML5Video;