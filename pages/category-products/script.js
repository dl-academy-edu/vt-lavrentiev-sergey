var productMargin = document.querySelectorAll(".category-list__item");
var length = productMargin.length;

for (var i = 3; i < length; i+=6) {
  if (productMargin[i]) productMargin[i].style.marginLeft = '200px';
};

for (var i = 5; i < length; i+=6) {
  if (productMargin[i]) productMargin[i].style.marginRight = '0';
};

