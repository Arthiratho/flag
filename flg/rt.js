const imgurl = "flg.jpg";
const land = document.createElement("img");
land.setAttribute("src", imgurl);
land.setAttribute("class", "land-bg");
document.body.append(land);

let a = document.createElement("p");
a.innerText="India";
a.setAttribute("class", "p1");
document.body.append(a);


let c = document.createElement("p");
c.innerText="Region: India";
c.setAttribute("class", "p1");
document.body.append(c);

let b = document.createElement("p");
b.innerText="Population:206.35.567";
b.setAttribute("class", "p1");
document.body.append(b);

let e = document.createElement("p");
e.innerText="Capital: delhi";
e.setAttribute("class", "p1");
document.body.append(e);

const img1 = "https://iso.500px.com/wp-content/uploads/2021/02/Torres-Del-Paine-Sunset-By-Paul-Reiffer-2-1500x1000.jpg";
const landscape1 = document.createElement("img");
landscape1.setAttribute("src", img1);
document.body.append(landscape1);

const img2 = "https://www.teahub.io/photos/full/1-12815_purplish-blue-landscape-wallpaper-purple-and-blue-landscape.jpg";
const landscape2 = document.createElement("img");
landscape2.setAttribute("src", img2);
document.body.append(landscape2);

const img3 = "https://mocah.org/uploads/posts/343911-Neon-Scenery-Landscape-Digital-Art.jpg";
const landscape3 = document.createElement("img");
landscape3.setAttribute("src", img3);
document.body.append(landscape3);