// == EGScans ======================================================================================
export default {
  name: 'Easy Going Scans',
  url: /https?:\/\/read.egscans.com\/.+/,
  homepage: 'http://read.egscans.com/',
  lang: ['eng'],
  category: 'manga',
  run() {
    const src = W.img_url.slice(1);
    return {
      title: $('select[name="manga"] option:selected').text().trim(),
      series: '#',
      quant: src.length,
      prev: W.prev_chap,
      next: W.next_chap,
      listImages: src,
      before() {
        $(src).each((index, value) => {
          const img = new Image();
          img.src = value;
        });
      },
    };
  },
};
