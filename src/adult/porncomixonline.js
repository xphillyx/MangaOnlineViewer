// == PornComixOnline ==============================================================================
export default {
  name: 'PornComixOnline',
  url: /https?:\/\/(www.)?porncomixonline.net\/.+/,
  homepage: 'https://www.porncomixonline.net',
  language: ['English'],
  category: 'hentai',
  run() {
    return {
      title: $('.entry-title').text().trim(),
      series: '#',
      quant: $('#single-pager:first option').get().length || $('.dgwt-jg-gallery img').get().length,
      prev: '#',
      next: '#',
      listPages: $('#single-pager:first option').get().map((i) => $(i).attr('data-redirect')),
      listImages: $('.dgwt-jg-gallery img').get().map((i) => {
        const urls = $(i).attr('data-jg-srcset').split(',');
        let src = '';
        let w = 0;
        for (let l = 0; l < urls.length; l += 1) {
          const s = urls[l].match(/(.+) (\d+)w/);
          if (s[2] > w) {
            [, w, src] = s;
            w = s[2];
            src = s[1];
          }
        }
        return src;
      }),
      img: 'img.wp-manga-chapter-img',
    };
  },
};
