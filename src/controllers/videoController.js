
export const trending = (req,res) => {
    const videos = [
     {
      title:"First Vidoe",
      rating:5,
      comments:2,
      createdAt: "2 minites age",
      views:59,
      id:1   
     },
     {
      title:"Second Vidoe",
      rating:5,
      comments:2,
      createdAt: "2 minites age",
      views:59,
      id:1   
     },
     {
      title:"Third Vidoe",
      rating:5,
      comments:2,
      createdAt: "2 minites age",
      views:59,
      id:1   
     },
    ];
    res.render("home",{pageTilte:"Home", videos});
};
export const see = (req,res) => res.render("watch");
export const edit = (req,res) => res.render("edit");
export const search = (req,res) => res.send("Search");
export const deleteVideo = (req,res) => {
    return res.send("DeleteVideo");
}
export const upload = (req,res) => res.send("Upload");

