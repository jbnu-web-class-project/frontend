// Payment.jsx
import React, { useState } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import DaumPostcode from 'react-daum-postcode';
import '../styles/Body_payments.css';

const Payment = () => {
  const location = useLocation();
  const navigate = useNavigate();
  
  // 상품 정보 state
  const [productInfo] = useState({
    name: '울산 HD FC 2025 홈 유니폼',
    price: 150000,
    size: '2XL',
    option: '기본마킹',
    delivery: '무료'
  });

  // 배송 정보 state
  const [addressInfo, setAddressInfo] = useState({
    name: '내 자택방',
    phone: '010-1111-1111',
    address: '전북특별자치도 전주시 덕진구'
  });
  
  // 배송 메모 state
  const [deliveryMemo, setDeliveryMemo] = useState('');
  const [isEditingMemo, setIsEditingMemo] = useState(false);
  
  // 결제 수단 state
  const [paymentMethod, setPaymentMethod] = useState('');
  const [registeredCard, setRegisteredCard] = useState(null);
  const [bankAccount, setBankAccount] = useState(null);
  
  // 모달 상태 state
  const [showAddressModal, setShowAddressModal] = useState(false);
  const [showPhoneModal, setShowPhoneModal] = useState(false);
  const [showCardModal, setShowCardModal] = useState(false);
  const [showBankModal, setShowBankModal] = useState(false);
  const [showPaymentModal, setShowPaymentModal] = useState(false);
  
  // 약관 동의 state
  const [agreement, setAgreement] = useState(false);

  // 결제 가능 여부 확인
  const canProceedPayment = agreement && (registeredCard || bankAccount);

  // 주소 변경 핸들러
  const handleAddressComplete = (data) => {
    setAddressInfo(prev => ({
      ...prev,
      address: data.address
    }));
    setShowAddressModal(false);
  };

  // 전화번호 변경 핸들러
  const handlePhoneChange = (newPhone) => {
    setAddressInfo(prev => ({
      ...prev,
      phone: newPhone
    }));
    setShowPhoneModal(false);
  };

  // 결제 처리 핸들러
  const handlePayment = () => {
    if (!canProceedPayment) return;
    setShowPaymentModal(true);
  };

  return (
    <div className="payment-container">
      <div className="payment-content">
        {/* 주문 상품 */}
        <section className="order-section">
          <h2>주문상품</h2>
          <div className="product-box">
            <div className="product-image">
              <img src="/images/product.png" alt="울산 유니폼" />
              <span className="badge">기본마킹</span>
            </div>
            <div className="product-info">
              <h3>{productInfo.name}</h3>
              <p>배송비: {productInfo.delivery}</p>
              <p>사이즈: {productInfo.size}</p>
              <p>옵션: {productInfo.option}</p>
              <p className="price">{productInfo.price.toLocaleString()}원</p>
            </div>
          </div>
        </section>
                {/* 배송지 섹션 */}
                <section className="delivery-section">
          <div className="section-header">
            <h2>배송지</h2>
            <div className="button-group">
              <button onClick={() => setShowAddressModal(true)}>주소변경</button>
              <button onClick={() => setShowPhoneModal(true)}>연락처변경</button>
            </div>
          </div>
          <div className="address-info">
            <p className="name">{addressInfo.name}</p>
            <p className="phone">{addressInfo.phone}</p>
            <p className="address">{addressInfo.address}</p>
            <div className="memo-section">
              {isEditingMemo ? (
                <div className="memo-edit">
                  <input
                    type="text"
                    value={deliveryMemo}
                    onChange={(e) => setDeliveryMemo(e.target.value)}
                    placeholder="배송 메모를 입력해주세요"
                  />
                  <button onClick={() => setIsEditingMemo(false)}>저장</button>
                </div>
              ) : (
                <div className="memo-display">
                  <p>{deliveryMemo || '배송 메모'}</p>
                  <button onClick={() => setIsEditingMemo(true)}>
                    {deliveryMemo ? '수정' : '입력'}
                  </button>
                </div>
              )}
            </div>
          </div>
        </section>

        {/* 결제 수단 섹션 */}
        <section className="payment-method">
          <h2>결제수단</h2>
          <div className="payment-options">
            <label>
              <input
                type="radio"
                name="payment"
                value="card"
                checked={paymentMethod === 'card'}
                onChange={() => {
                  setPaymentMethod('card');
                  if (!registeredCard) setShowCardModal(true);
                }}
              />
              <span>카드 간편결제</span>
              {registeredCard && (
                <div className="registered-info">
                  <span>{registeredCard.cardName} ({registeredCard.number})</span>
                  <button onClick={() => setShowCardModal(true)}>변경</button>
                </div>
              )}
            </label>
            <label>
              <input
                type="radio"
                name="payment"
                value="bank"
                checked={paymentMethod === 'bank'}
                onChange={() => {
                  setPaymentMethod('bank');
                  if (!bankAccount) setShowBankModal(true);
                }}
              />
              <span>무통장 입금</span>
              {bankAccount && (
                <div className="registered-info">
                  <span>{bankAccount.bankName} {bankAccount.accountNumber}</span>
                  <button onClick={() => setShowBankModal(true)}>변경</button>
                </div>
              )}
            </label>
          </div>
        </section>

        {/* 구매 동의 섹션 */}
        <section className="agreement-section">
          <label className="agreement-label">
            <input
              type="checkbox"
              checked={agreement}
              onChange={(e) => setAgreement(e.target.checked)}
            />
            <span>구매 조건 확인 및 결제진행 동의</span>
          </label>
        </section>
      </div>

      {/* 결제 요약 */}
      <div className="payment-summary">
        <h2>결제 요약</h2>
        <div className="summary-content">
          <div className="summary-product">
            <h3>주문 상품</h3>
            <p>{productInfo.name}</p>
            <p>사이즈: {productInfo.size}</p>
            <p>옵션: {productInfo.option}</p>
          </div>
          <div className="summary-delivery">
            <h3>배송지</h3>
            <p>{addressInfo.address}</p>
            <p>{addressInfo.phone}</p>
          </div>
          <div className="price-info">
            <div className="price-row">
              <span>할인</span>
              <span>0원</span>
            </div>
            <div className="price-row">
              <span>적립 포인트</span>
              <span>100원</span>
            </div>
            <div className="total-price">
              <span>총 결제금액</span>
              <span>{productInfo.price.toLocaleString()}원</span>
            </div>
          </div>
          <button 
            className="payment-button"
            disabled={!canProceedPayment}
            onClick={handlePayment}
          >
            결제하기
          </button>
        </div>
      </div>
            {/* 모달 컴포넌트들 */}
            {showAddressModal && (
        <div className="modal-overlay">
          <div className="modal-content">
            <div className="modal-header">
              <h3>배송지 변경</h3>
              <button onClick={() => setShowAddressModal(false)}>✕</button>
            </div>
            <div className="modal-body">
              <DaumPostcode 
                onComplete={handleAddressComplete}
                style={{ height: 400 }}
              />
            </div>
          </div>
        </div>
      )}

      {showPhoneModal && (
        <div className="modal-overlay">
          <div className="modal-content">
            <div className="modal-header">
              <h3>연락처 변경</h3>
              <button onClick={() => setShowPhoneModal(false)}>✕</button>
            </div>
            <div className="modal-body">
              <input
                type="tel"
                placeholder="010-0000-0000"
                value={addressInfo.phone}
                onChange={(e) => handlePhoneChange(e.target.value)}
                className="phone-input"
              />
              <button 
                className="save-button"
                onClick={() => setShowPhoneModal(false)}
              >
                저장
              </button>
            </div>
          </div>
        </div>
      )}

      {showCardModal && (
        <div className="modal-overlay">
          <div className="modal-content">
            <div className="modal-header">
              <h3>카드 등록</h3>
              <button onClick={() => setShowCardModal(false)}>✕</button>
            </div>
            <div className="modal-body">
              <div className="form-group">
                <label>카드번호</label>
                <input
                  type="text"
                  placeholder="0000-0000-0000-0000"
                  maxLength="19"
                  className="card-input"
                />
              </div>
              <div className="form-row">
                <div className="form-group">
                  <label>유효기간</label>
                  <input
                    type="text"
                    placeholder="MM/YY"
                    maxLength="5"
                    className="expiry-input"
                  />
                </div>
                <div className="form-group">
                  <label>CVC</label>
                  <input
                    type="password"
                    placeholder="000"
                    maxLength="3"
                    className="cvc-input"
                  />
                </div>
              </div>
              <button 
                className="register-button"
                onClick={() => {
                  setRegisteredCard({
                    cardName: '신한카드',
                    number: '****-****-****-1234'
                  });
                  setShowCardModal(false);
                }}
              >
                등록하기
              </button>
            </div>
          </div>
        </div>
      )}

      {showBankModal && (
        <div className="modal-overlay">
          <div className="modal-content">
            <div className="modal-header">
              <h3>무통장 입금</h3>
              <button onClick={() => setShowBankModal(false)}>✕</button>
            </div>
            <div className="modal-body">
              <div className="bank-info">
                <p>입금 은행: 국민은행</p>
                <p>계좌번호: 111-111-111111</p>
                <p>예금주: HEIM</p>
                <p>입금기한: 24시간 이내</p>
              </div>
              <button 
                className="confirm-button"
                onClick={() => {
                  setBankAccount({
                    bankName: '국민은행',
                    accountNumber: '111-111-111111'
                  });
                  setShowBankModal(false);
                }}
              >
                확인
              </button>
            </div>
          </div>
        </div>
      )}

      {showPaymentModal && (
        <div className="modal-overlay">
          <div className="modal-content payment-confirm">
            <div className="modal-header">
              <h3>결제 확인</h3>
              <button onClick={() => setShowPaymentModal(false)}>✕</button>
            </div>
            <div className="modal-body">
              <div className="confirm-info">
                <h4>주문 상품</h4>
                <p>{productInfo.name}</p>
                <p>사이즈: {productInfo.size}</p>
                <p>옵션: {productInfo.option}</p>
              </div>
              <div className="payment-info">
                <h4>결제 정보</h4>
                <p>결제 수단: {paymentMethod === 'card' ? '카드' : '무통장입금'}</p>
                {paymentMethod === 'card' && registeredCard && (
                  <p>카드 정보: {registeredCard.cardName} ({registeredCard.number})</p>
                )}
                {paymentMethod === 'bank' && bankAccount && (
                  <p>입금 계좌: {bankAccount.bankName} {bankAccount.accountNumber}</p>
                )}
                <p className="total-amount">결제 금액: {productInfo.price.toLocaleString()}원</p>
              </div>
              <div className="button-group">
                <button 
                  className="cancel-button"
                  onClick={() => setShowPaymentModal(false)}
                >
                  취소
                </button>
                <button 
                  className="confirm-button"
                  onClick={() => {
                    alert('결제가 완료되었습니다.');
                    setShowPaymentModal(false);
                    navigate('/orderhistory');
                  }}
                >
                  결제하기
                </button>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default Payment;