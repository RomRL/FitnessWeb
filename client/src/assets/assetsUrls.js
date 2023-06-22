const allURLS = {
  logo:
    "https://queenstreetmedical.co.nz/wp-content/uploads/2023/02/qstfsvglogo.png",
  "home-page-left":
    "https://deprmqvywv28x.cloudfront.net/fitlovers/homepage-banner-left.png",
  "home-page-right":
    "https://deprmqvywv28x.cloudfront.net/fitlovers/homepage-banner-right.png",
  weight:
    "https://media.front.xoedge.com/images/f80416e9-d389-4beb-b778-de131aa323b2~rs_1080.h?q=90",
  statistics:
    "https://multimedia.journalism.berkeley.edu/wp-content/uploads/Databases-of-Statistical-Info-article-8.jpg",
  workout:
    "https://media.self.com/photos/6398b36c72eb56f726777d06/4:3/w_2560%2Cc_limit/weekly-workout-schedule.jpeg ",
  "general-info":
    "https://img-c.udemycdn.com/course/750x422/1878690_e771_5.jpg",
};

function getURL(key) {
  return allURLS[key];
}

export default getURL;
