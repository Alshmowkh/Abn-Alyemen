if (document.images) {
img1_up    = new Image();
img1_over  = new Image();
img2_up    = new Image();
img2_over  = new Image();
img3_up    = new Image();
img3_over  = new Image();
img4_up    = new Image();
img4_over  = new Image();
img5_up    = new Image();
img5_over  = new Image();

img1_up.src = "botton/main.gif";
img1_over.src = "botton/main-over.gif";
img2_up.src = "botton/products.gif";
img2_over.src = "botton/products-over.gif";
img3_up.src = "botton/news.gif";
img3_over.src = "botton/news-over.gif";
img4_up.src = "botton/contact.gif";
img4_over.src = "botton/contact-over.gif";
img5_up.src = "botton/about.gif";
img5_over.src = "botton/about-over.gif";
}

function over(i)
{
if (document.images)
eval('document.img' + i + '.src = img' +i+ '_over.src');
}

function out(k)
{
if (document.images)
eval('document.img' + k + '.src = img' + k + '_up.src');
}