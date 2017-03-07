function Slider(ul, navigacija) {
    var self = this;
    this.ul = ul;
    this.imgs = this.ul.find('img');
    this.imgslenght = this.imgs.length;
    this.btns = navigacija.find('button');
    this.current = 1;
    this.init = function() {
        this.btns.on('click', this.aaa.bind(this))
    };
    this.aaa = function() {
        console.log(event.target);
        var dir = $(event.target).data('dir');
        var imgWidth = this.imgs.width();
        // var imgWidth = this.imgs.width();
        // (dir == 'next') ? true:false
        (dir == 'next') ? this.current++: this.current--;
        if (this.current == 0) {
            this.current = this.imgslenght;
            dir = 'next';
            imgWidth = imgWidth * (this.imgslenght - 1);
        } else if (this.current == this.imgslenght + 1) {
            this.current = 1;
            imgWidth = imgWidth * (this.imgslenght - 1);
            dir = 'prev';
        }
        this.slide(dir, imgWidth);
    }
    this.slide = function(dir, imgWidth) {
        var unit = '';
        (dir == 'next') ? unit = '-=': unit = '+=';
        this.ul.animate({
            'margin-left': unit + imgWidth
        })
    }
}
//instanca
var slider = new Slider($('ul'), $('.navigacija'));
//mora da se pozove f iz clase
slider.init();