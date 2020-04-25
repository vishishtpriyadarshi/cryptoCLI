const isRequired = input => (input === '' ? 'Empty value not allowed !!!' : true);

module.exports = { isRequired };