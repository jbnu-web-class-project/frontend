export const handleApiError = async (response) => {
    if (!response.ok) {
        return response.json().then((errorData) => {
            let errorMessage;

            switch (response.status) {
                case 400:
                    errorMessage = '잘못된 요청입니다. 모든 필드를 올바르게 입력했는지 확인하세요.';
                    break;
                case 401:
                    errorMessage = '인증 오류입니다. 로그인 정보가 잘못되었습니다.';
                    break;
                case 404:
                    errorMessage = '서버를 찾을 수 없습니다. URL이 올바른지 확인하세요.';
                    break;
                case 409:
                    errorMessage = '이메일이 이미 등록되어 있습니다.';
                    break;
                case 500:
                    errorMessage = '서버 오류입니다. 잠시 후 다시 시도해 주세요.';
                    break;
                default:
                    errorMessage = errorData.message || '서버 응답에 문제가 있습니다.';
            }

            throw new Error(errorMessage);
        });
    }
    return response.json(); // 정상 응답일 경우 데이터 반환
};
