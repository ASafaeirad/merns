export const slug = ({ unique } = {}) => {
  const slugType = {
    type: String,
    trim: true,
    required: [true, 'Slug is required!'],
    lowercase: true,
  };

  if (unique) {
    slugType.unique = [true, 'Slug already existed!'];
  }

  return slugType;
};

export const title = {
  type: String,
  required: [true, 'title is required!'],
  trim: true,
};
