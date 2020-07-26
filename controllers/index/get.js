module.exports = (req, res) => {
  return res.render('index/index', {
    page: 'index/index',
    title: 'Paylaş ve Para Kazan',
    includes: {
      external: ['css', 'fontawesome']
    }
  });
}
