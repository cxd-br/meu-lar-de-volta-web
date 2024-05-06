import { CustomSwal } from '.';

export function showSuccess(message: string) {
  CustomSwal.fire({
    html: <button onClick={() => CustomSwal.close()}>Ok</button>,
    icon: 'success',
    showConfirmButton: false,
    titleText: message,
    width: '30%',
  });
}
