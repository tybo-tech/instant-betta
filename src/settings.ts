export const editorStyle = {
  margin: '0',
  height: '100px',
  display: 'block',
  background: '#fff',
};

export const editorConfig = {
  toolbar: [
    ['bold', 'italic', 'underline', 'strike'],
    [{ list: 'ordered' }, { list: 'bullet' }],
    [{ size: ['small', false, 'large', 'huge'] }], // custom dropdown
    [{ color: [] }, { background: [] }],
    [{ font: [] }],
    ['blockquote', 'code-block'],

    ['clean'],
    // ['formula']
  ],
};

export const api = 'https://api.instanteats.co.za/api';
export const IMAGE_CROP_SIZE = 800;
export const ORDER = 'current_order_item';

export const ORDER_SUCESS = 'f00f7b2a-01d4-4a54-b845-322a302d5497';
export const ORDER_CANCEL = '03b01ffc-07de-419d-81c6-103f7c75fda7';
export const BASE = 'https://instanteats.co.za/';
// export const api = `${BASE}/api/api`;
