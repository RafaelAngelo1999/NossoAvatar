const proxy = [
  {
    context: '/api',
    target: 'http://localhost:54130',
    secure: false,
    logLevel: 'debug',
    pathRewrite :{'^/api' : ''}
  }
];
module.exports = proxy;