class Hover {
  constructor(target, num, img, price, cost, card) {
    this.target = target;
    this.num = num;
    this.img = img;
    this.price = price;
    this.cost = cost;
    this.card = card;
    this.centerCard = {
      centerX: this.target.offsetLeft + this.target.offsetWidth,
      centerY: this.target.offsetTop + this.target.offsetHeight,
    };
  }
  hover() {
    this.target.addEventListener("mousemove", (e) => {
      this.num.style.transition =
        this.card.style.transition =
        this.cost.style.transition =
        this.price.style.transition =
        this.img.style.transition =
        this.card.childNodes[1].style.transition =
        this.cost.style.transition =
          `all .1s`;
      this.num.style.opacity = this.price.style.opacity = "1";
      this.card.childNodes[1].opacity = "0.4";
      this.price.style.color = this.num.style.color = "white";
      this.cost.style.transform = `perspective(1000px) rotateX(${
        (e.clientY - window.innerHeight * 0.5) * 0.02
      }deg)rotateY(${
        (this.centerCard.centerX - e.clientX) / 20
      }deg) scale(1.1) translate(-15px, -5px)`;
      this.img.style.filter = `drop-shadow(20px 15px 4px rgba(0, 0, 0, 0.25))`;
      this.cost.style.filter =
        this.num.style.filter = `drop-shadow(5px 13px 4px rgba(0, 0, 0, 0.25))`;
      this.card.style.transform = `perspective(1000px) rotateX(${
        (e.clientY - window.innerHeight * 0.5) * 0.02
      }deg)rotateY(${(this.centerCard.centerX - e.clientX) / 20}deg)`;
      this.img.style.transform = `perspective(1000px) rotateX(${
        (e.clientY - window.innerHeight * 0.5) * 0.02
      }deg)rotateY(${
        (this.centerCard.centerX - e.clientX) / 20
      }deg) scale(1.15) translate(-30px, -20px)`;
      this.num.style.transform = `perspective(1000px) rotateX(${
        (e.clientY - window.innerHeight * 0.5) * 0.02
      }deg)rotateY(${
        (this.centerCard.centerX - e.clientX) / 20
      }deg) scale(1.15)`;
    });
  }
  unhover() {
    this.target.addEventListener("mouseout", () => {
      this.price.style.transform =
        this.cost.style.transition =
        this.img.style.transition =
        this.card.style.transition =
          `all .23s`;
      this.card.style.transform =
        this.num.style.transform =
        this.img.style.transform =
          `rotateX(0) rotateY(0)`;
      this.card.childNodes[1].style.opacity =
        this.price.style.opacity =
        this.num.style.opacity =
          "0.4";
      this.card.childNodes[1].style.color = "white";
      this.card.childNodes[1].style.transform =
        this.price.style.transform =
        this.cost.style.transform =
        this.num.style.opacity =
          "scale(1)";
      this.img.style.filter = `none`;
      this.cost.style.filter = this.num.style.filter = `none`;
    });
  }
}

function creatNewObject(realCard) {
  const card = new Hover(
    realCard,
    realCard.childNodes[7],
    realCard.childNodes[1],
    realCard.childNodes[5].childNodes[1],
    realCard.childNodes[5],
    realCard.childNodes[3]
  );
  card.hover(), card.unhover();
}
creatNewObject(document.querySelector(".cardholder__realCard_1")),
  creatNewObject(document.querySelector(".cardholder__realCard_2")),
  creatNewObject(document.querySelector(".cardholder__realCard_3"));
