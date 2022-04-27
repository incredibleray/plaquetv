
import React from 'react';
import Gallery from 'react-grid-gallery';
import { useSelector } from 'react-redux'
import getImages from './plaques';


function PlaqueView(props) {
  const page = useSelector((state) => state.page)
  let rowHeight=(window.innerHeight-2)*0.5
  var scale = rowHeight / 2550;
  var picWidth = 834 * scale;
  var picsPerCol = Math.round(window.innerWidth / picWidth)+1;

  let plaques=getImages(picsPerCol, page);

  return (
   <div style={{
        display: "block",
        minHeight: "1px",
        width: "100%",
        border: "1px solid #ddd",
        overflow: "auto"}}>
    <Gallery
images={plaques}
enableLightbox={false}
enableImageSelection={false} rowHeight={rowHeight} margin={0} maxRows={2} />
    </div>);
}

export default PlaqueView;