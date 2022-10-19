export const validateFullname = (data) => {
  var re = /^[a-zA-Z]{4,}(?: [a-zA-Z]+){0,2}$/;
  return re.test(data)
}

export const validateEmail = (data) => {
  var re = /\S+@\S+\.\S+/;
  return re.test(data);
};

export const validateSlug = (data) => {
  var re = /^[a-z0-9]+(?:-[a-z0-9]+)*$/;
  return re.test(data);
}

export const validatePhone = (data) => {
  var re = /^[\+]?[(]?[0-9]{3}[)]?[-\s\.]?[0-9]{3}[-\s\.]?[0-9]{4,6}$/im;
  return re.test(data);
}