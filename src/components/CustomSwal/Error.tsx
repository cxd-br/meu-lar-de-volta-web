import { CustomSwal } from '.';

export function showError(message: string) {
  CustomSwal.fire({
    html: <button onClick={() => CustomSwal.close()}>Ok</button>,
    icon: 'error',
    showConfirmButton: false,
    title: 'Oops...',
    titleText: message,
    width: '30%',
  });
}
