import { message } from 'antd';
import getFileInfo from '@/components/utils/file';

const duration = 3;
// eslint-disable-next-line import/prefer-default-export
export const isValidateImg = async (file, ...rest) => {
  let pass = true;
  let fileInfo = {};
  try {
    fileInfo = await getFileInfo(file);
  } catch (e) { console.error(e); } // eslint-disable-line
  if (rest.width && rest.height) {
    if (fileInfo.width !== rest.width && fileInfo.height !== rest.height) {
      message.error('图片尺寸与指定的不符合！', duration);
      pass = false;
    }
  }

  if (rest.minWidth && rest.minHeight) {
    if (fileInfo.width < rest.minWidth || fileInfo.height < rest.minHeight) {
      message.error('图片宽度或高度小于制定尺寸！', duration);
      pass = false;
    }
  }

  const fileSize = (file.size / 1024 / 1024).toFixed(2);
  if (fileSize > rest.sizeLimit) {
    message.error('图片超过制定大小！', duration);
    pass = false;
  }
  return pass;
};

// export const isValidateFile = async (file, ...rest) => {
//   let pass = true;
//   let fileInfo = {};
//   try {
//     fileInfo = await getFileInfo(file);
//   } catch (e) { console.error(e); } // eslint-disable-line
//   return pass;
// };
