

// for (var j=3; j<11; j++) {
// let images=[];
//   for (var i=1; i<29; i++) {
//     images.push(  {
//       src: "pic"+i.toString()+".png",
//       thumbnail: "pic"+j.toString()+".png",
//       thumbnailWidth: 834,
//       thumbnailHeight: 2550,
//   });
// }
//   imageSets.push(images);
// }



function getImages(imagesPerCol, page) {
  let imageSets= [];
  let imagesPerPage=imagesPerCol*2;

  let images=[
    {
      src: "mmb_2204001.png",
      thumbnail: "mmb_2204001.png",
      thumbnailWidth: 834,
      thumbnailHeight: 2550,
  },
    {
      src: "mmb_2204002.png",
      thumbnail: "mmb_2204002.png",
      thumbnailWidth: 834,
      thumbnailHeight: 2550,
  },
  {
    src: "mmb_2204003.png",
    thumbnail: "mmb_2204003.png",
    thumbnailWidth: 834,
    thumbnailHeight: 2550,
  },
  {
    src: "mmb_2204004.png",
    thumbnail: "mmb_2204004.png",
    thumbnailWidth: 834,
    thumbnailHeight: 2550,
  },
  ];
    for (var i=images.length; i<imagesPerPage; i++) {
      images.push(  {
        src: "mmb_blank.png",
        thumbnail: "mmb_blank.png",
        thumbnailWidth: 834,
        thumbnailHeight: 2550,
    });
  }
  
  imageSets.push(images);
  
  images=[
    {
      src: "rebirth_2205001.png",
      thumbnail: "rebirth_2205001.png",
      thumbnailWidth: 834,
      thumbnailHeight: 2550,
  },
    {
      src: "rebirth_2205002.png",
      thumbnail: "rebirth_2205002.png",
      thumbnailWidth: 834,
      thumbnailHeight: 2550,
  },
  {
    src: "rebirth_2205003.png",
    thumbnail: "rebirth_2205003.png",
    thumbnailWidth: 834,
    thumbnailHeight: 2550,
  },
  {
    src: "rebirth_2205004.png",
    thumbnail: "rebirth_2205004.png",
    thumbnailWidth: 834,
    thumbnailHeight: 2550,
  },
  ];
    for (var i=images.length; i<imagesPerPage; i++) {
      images.push(  {
        src: "rebirth_blank.png",
        thumbnail: "rebirth_blank.png",
        thumbnailWidth: 834,
        thumbnailHeight: 2550,
    });
  }
  imageSets.push(images);

  return imageSets[page];
}

export default getImages;