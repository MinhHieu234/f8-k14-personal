// Hàm này giả lập việc gọi API đăng nhập
export const mockLoginApi = async ({ email, password }) => {
    console.log('Đang gọi API giả với:', { email, password });

    // Giả lập độ trễ mạng trong 1 giây
    await new Promise(resolve => setTimeout(resolve, 1000));

    // Kiểm tra thông tin đăng nhập giả
    if (email === 'hieu@example.com' && password === '123') {
        // Nếu đúng, trả về một đối tượng giống hệt như API thật
        return {
            data: {
                message: 'Đăng nhập thành công!',
                token: 'day-la-mot-token-gia-de-kiem-tra-fe',
                user: {
                    id: 1,
                    name: 'Mạnh Hiếu',
                    email: 'hieu@example.com'
                }
            }
        };
    } else {
        // Nếu sai, "ném" ra một lỗi giống hệt như lỗi của Axios
        const error = new Error('Sai thông tin đăng nhập');
        error.response = {
            data: {
                message: 'Email hoặc mật khẩu không chính xác.'
            }
        };
        throw error;
    }
};