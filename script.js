/**
 * Graduation Invitation — Lê Phương Thảo Linh
 *
 * Edit invitationData below to update names, dates, venue,
 * portrait photo, parking info, and map URL.
 */

(() => {
  "use strict";

  /* =========================================================
     CENTRAL DATA — replace placeholders when ready
     ========================================================= */
  const invitationData = {
    graduateName: "Lê Phương Thảo Linh",
    shortName: "Thảo Linh",
    school: "Trường Đại học Ngoại ngữ — ĐHQGHN (ULIS)",
    schoolShort: "Trường Đại học Ngoại ngữ - ĐHQGHN (ULIS)",
    major: "Ngôn ngữ Anh",

    datetime: "16h00 · Ngày 23/07/2026",
    datetimeIsPlaceholder: false,
    venue: "Hội trường Nguyễn Văn Đạo",
    venueIsPlaceholder: false,
    venueMapsUrl: "https://maps.app.goo.gl/BsUVkH4B65VdQy7J8",

    introMessage:
      "Cảm ơn bạn đã dành thời gian xem thư này. Trước khi đến lời mời chính thức, hãy cùng mình nhìn lại hành trình đại học vừa qua nhé — từ ngày đầu tiên đến khoảnh khắc sắp tốt nghiệp này.",

    stories: {
      one: [
        "Ngày ấy mình bước vào cổng ULIS với balo còn thơm mùi mới — vừa háo hức, vừa hồi hộp. Chưa biết phía trước sẽ có bao nhiêu bài tập, bao nhiêu đêm ôn thi, và bao nhiêu người sẽ trở thành bạn đồng hành.",
        "Đó chỉ là khởi đầu. Nhưng từ khoảnh khắc ấy, hành trình đại học của mình đã bắt đầu.",
      ],
      two: [
        "Những năm tháng qua đầy thuyết trình run tay, kỳ thi căng thẳng, rồi cả tiếng cười trên sân trường. Gia đình, bạn bè, thầy cô — ai cũng góp một phần để mình lớn hơn từng ngày.",
        "Không có thành công nào là của riêng một người. Buổi lễ sắp tới cũng là ngày mình muốn nói lời cảm ơn đến tất cả các bạn.",
      ],
      three: [
        "Cổng trường sắp khép lại, nhưng đó không phải lời tạm biệt — mà là lời hẹn cho những điều mới. Trước khi sang chương tiếp theo, mình rất muốn có mặt của những người quan trọng nhất để cùng nhìn lại và cùng ăn mừng.",
      ],
    },

    thanksMessage:
      "Cảm ơn bạn đã đồng hành và khích lệ mình suốt quãng đường vừa qua. Những lời động viên ấy thật sự quý giá với mình.",
    thanksMessageEmphasis:
      "Nhờ có sự giúp đỡ và niềm tin từ bạn, mình mới có thể tốt nghiệp xuất sắc ngành Ngôn ngữ Anh tại ULIS. Mình rất vui nếu bạn đến chung vui trong ngày nhận bằng.",
    thanksHighlights: [
      "tốt nghiệp xuất sắc ngành Ngôn ngữ Anh tại ULIS",
    ],

    phone: "0983274782",

    parking: {
      badge: "Gợi ý gửi xe gần địa điểm tổ chức",
      address:
        "Hầm để xe Trung tâm thương mại Indochina Plaza (đối diện cổng Trường Đại học Quốc gia, đường Xuân Thủy)",
      entrance: "Lối vào hầm xe của Indochina Plaza",
      feeHours: "Theo quy định của trung tâm thương mại",
      walkGuide: "Từ Indochina Plaza đi bộ qua đường tới Hội trường Nguyễn Văn Đạo",
      mapsUrl: "https://maps.app.goo.gl/XaPkGANQzvsbf9Qm6",
    },

    formalGift: "Sự hiện diện của bạn chính là món quà ý nghĩa nhất cho hành trình này.",
    footerSign: "Lê Phương Thảo Linh",
  };

  /* =========================================================
     SVG templates — dense daisy wallpaper background
     ========================================================= */
  const SVG = {
    daisy: `
<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 64 64" fill="none">
  <g class="head">
    <ellipse cx="32" cy="14" rx="6" ry="13" fill="#ffffff"/>
    <ellipse cx="32" cy="14" rx="6" ry="13" fill="#ffffff" transform="rotate(36 32 32)"/>
    <ellipse cx="32" cy="14" rx="6" ry="13" fill="#ffffff" transform="rotate(72 32 32)"/>
    <ellipse cx="32" cy="14" rx="6" ry="13" fill="#ffffff" transform="rotate(108 32 32)"/>
    <ellipse cx="32" cy="14" rx="6" ry="13" fill="#ffffff" transform="rotate(144 32 32)"/>
    <ellipse cx="32" cy="14" rx="6" ry="13" fill="#ffffff" transform="rotate(180 32 32)"/>
    <ellipse cx="32" cy="14" rx="6" ry="13" fill="#ffffff" transform="rotate(216 32 32)"/>
    <ellipse cx="32" cy="14" rx="6" ry="13" fill="#ffffff" transform="rotate(252 32 32)"/>
    <ellipse cx="32" cy="14" rx="6" ry="13" fill="#ffffff" transform="rotate(288 32 32)"/>
    <ellipse cx="32" cy="14" rx="6" ry="13" fill="#ffffff" transform="rotate(324 32 32)"/>
    <circle cx="32" cy="32" r="9" fill="#ffce00"/>
  </g>
</svg>`.trim(),

    yellow: `
<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 40 40" fill="none">
  <g class="head">
    <path fill="#f0e68c" d="M20,8 C23,8 26,12 26,16 C26,20 22,24 20,26 C18,24 14,20 14,16 C14,12 17,8 20,8 Z"/>
    <path fill="#f0e68c" d="M20,8 C23,8 26,12 26,16 C26,20 22,24 20,26 C18,24 14,20 14,16 C14,12 17,8 20,8 Z" transform="rotate(90 20 20)"/>
    <path fill="#f0e68c" d="M20,8 C23,8 26,12 26,16 C26,20 22,24 20,26 C18,24 14,20 14,16 C14,12 17,8 20,8 Z" transform="rotate(180 20 20)"/>
    <path fill="#f0e68c" d="M20,8 C23,8 26,12 26,16 C26,20 22,24 20,26 C18,24 14,20 14,16 C14,12 17,8 20,8 Z" transform="rotate(270 20 20)"/>
    <circle cx="20" cy="20" r="4.5" fill="#e8ed9a"/>
  </g>
</svg>`.trim(),

    petal: `
<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 14 20" fill="none">
  <ellipse cx="7" cy="10" rx="5.5" ry="9" fill="#ffffff"/>
</svg>`.trim(),
  };

  /* Dense daisy field — original wallpaper look */
  const flowers = [
    { x: 4, y: 3, type: "white", rotation: -8, scale: 0.85 },
    { x: 14, y: 1.5, type: "white", rotation: 12, scale: 0.72 },
    { x: 24, y: 4, type: "white", rotation: -15, scale: 0.9 },
    { x: 35, y: 2, type: "white", rotation: 6, scale: 0.78 },
    { x: 46, y: 3.5, type: "white", rotation: -10, scale: 0.88 },
    { x: 57, y: 1, type: "white", rotation: 14, scale: 0.7 },
    { x: 68, y: 4.5, type: "white", rotation: -5, scale: 0.82 },
    { x: 79, y: 2.5, type: "white", rotation: 9, scale: 0.75 },
    { x: 90, y: 3, type: "white", rotation: -18, scale: 0.86 },
    { x: 97, y: 6, type: "white", rotation: 4, scale: 0.68 },
    { x: 2, y: 12, type: "white", rotation: 11, scale: 0.8 },
    { x: 11, y: 10, type: "white", rotation: -7, scale: 0.74 },
    { x: 21, y: 13, type: "white", rotation: 16, scale: 0.92 },
    { x: 31, y: 9.5, type: "white", rotation: -12, scale: 0.7 },
    { x: 42, y: 12, type: "white", rotation: 5, scale: 0.84 },
    { x: 52, y: 10.5, type: "white", rotation: -14, scale: 0.76 },
    { x: 62, y: 13.5, type: "white", rotation: 8, scale: 0.88 },
    { x: 73, y: 11, type: "white", rotation: -6, scale: 0.72 },
    { x: 84, y: 14, type: "white", rotation: 13, scale: 0.8 },
    { x: 94, y: 11.5, type: "white", rotation: -9, scale: 0.78 },
    { x: 6, y: 20, type: "white", rotation: -11, scale: 0.86 },
    { x: 16, y: 22, type: "white", rotation: 7, scale: 0.7 },
    { x: 27, y: 19, type: "white", rotation: -16, scale: 0.9 },
    { x: 38, y: 21.5, type: "white", rotation: 10, scale: 0.74 },
    { x: 48, y: 19.5, type: "white", rotation: -4, scale: 0.82 },
    { x: 59, y: 22, type: "white", rotation: 15, scale: 0.76 },
    { x: 69, y: 20, type: "white", rotation: -13, scale: 0.88 },
    { x: 80, y: 23, type: "white", rotation: 3, scale: 0.7 },
    { x: 91, y: 20.5, type: "white", rotation: -8, scale: 0.84 },
    { x: 3, y: 29, type: "white", rotation: 14, scale: 0.72 },
    { x: 13, y: 31, type: "white", rotation: -5, scale: 0.86 },
    { x: 23, y: 28, type: "white", rotation: 9, scale: 0.78 },
    { x: 34, y: 30.5, type: "white", rotation: -17, scale: 0.9 },
    { x: 44, y: 28.5, type: "white", rotation: 6, scale: 0.7 },
    { x: 55, y: 31, type: "white", rotation: -10, scale: 0.84 },
    { x: 65, y: 29, type: "white", rotation: 12, scale: 0.76 },
    { x: 76, y: 32, type: "white", rotation: -7, scale: 0.88 },
    { x: 87, y: 29.5, type: "white", rotation: 4, scale: 0.74 },
    { x: 96, y: 31.5, type: "white", rotation: -14, scale: 0.8 },
    { x: 8, y: 38, type: "white", rotation: 8, scale: 0.82 },
    { x: 18, y: 40, type: "white", rotation: -12, scale: 0.7 },
    { x: 29, y: 37.5, type: "white", rotation: 15, scale: 0.88 },
    { x: 39, y: 40.5, type: "white", rotation: -6, scale: 0.74 },
    { x: 50, y: 38, type: "white", rotation: 11, scale: 0.86 },
    { x: 60, y: 41, type: "white", rotation: -9, scale: 0.72 },
    { x: 71, y: 38.5, type: "white", rotation: 5, scale: 0.9 },
    { x: 82, y: 40, type: "white", rotation: -15, scale: 0.78 },
    { x: 93, y: 39, type: "white", rotation: 7, scale: 0.84 },
    { x: 4, y: 47, type: "white", rotation: -10, scale: 0.76 },
    { x: 14, y: 49.5, type: "white", rotation: 13, scale: 0.88 },
    { x: 25, y: 46.5, type: "white", rotation: -4, scale: 0.7 },
    { x: 36, y: 49, type: "white", rotation: 16, scale: 0.82 },
    { x: 46, y: 47.5, type: "white", rotation: -11, scale: 0.9 },
    { x: 57, y: 50, type: "white", rotation: 3, scale: 0.74 },
    { x: 67, y: 47, type: "white", rotation: -8, scale: 0.86 },
    { x: 78, y: 49.5, type: "white", rotation: 14, scale: 0.72 },
    { x: 89, y: 48, type: "white", rotation: -6, scale: 0.8 },
    { x: 98, y: 50.5, type: "white", rotation: 9, scale: 0.68 },
    { x: 7, y: 56, type: "white", rotation: 5, scale: 0.84 },
    { x: 17, y: 58.5, type: "white", rotation: -14, scale: 0.72 },
    { x: 28, y: 55.5, type: "white", rotation: 10, scale: 0.88 },
    { x: 40, y: 58, type: "white", rotation: -7, scale: 0.76 },
    { x: 51, y: 56, type: "white", rotation: 12, scale: 0.8 },
    { x: 61, y: 59, type: "white", rotation: -16, scale: 0.7 },
    { x: 72, y: 56.5, type: "white", rotation: 4, scale: 0.86 },
    { x: 83, y: 58, type: "white", rotation: -9, scale: 0.74 },
    { x: 94, y: 57, type: "white", rotation: 15, scale: 0.82 },
    { x: 3, y: 65, type: "white", rotation: -5, scale: 0.78 },
    { x: 12, y: 67.5, type: "white", rotation: 11, scale: 0.9 },
    { x: 22, y: 64.5, type: "white", rotation: -13, scale: 0.7 },
    { x: 33, y: 67, type: "white", rotation: 6, scale: 0.84 },
    { x: 43, y: 65.5, type: "white", rotation: -10, scale: 0.76 },
    { x: 54, y: 68, type: "white", rotation: 8, scale: 0.88 },
    { x: 64, y: 65, type: "white", rotation: -15, scale: 0.72 },
    { x: 75, y: 67.5, type: "white", rotation: 3, scale: 0.8 },
    { x: 86, y: 66, type: "white", rotation: -8, scale: 0.86 },
    { x: 96, y: 68.5, type: "white", rotation: 14, scale: 0.74 },
    { x: 6, y: 74, type: "white", rotation: 9, scale: 0.82 },
    { x: 16, y: 76.5, type: "white", rotation: -6, scale: 0.7 },
    { x: 27, y: 74, type: "white", rotation: 12, scale: 0.88 },
    { x: 37, y: 77, type: "white", rotation: -11, scale: 0.76 },
    { x: 48, y: 74.5, type: "white", rotation: 5, scale: 0.84 },
    { x: 58, y: 76, type: "white", rotation: -14, scale: 0.72 },
    { x: 69, y: 75, type: "white", rotation: 7, scale: 0.9 },
    { x: 80, y: 77.5, type: "white", rotation: -4, scale: 0.78 },
    { x: 91, y: 75.5, type: "white", rotation: 16, scale: 0.8 },
    { x: 4, y: 83, type: "white", rotation: -9, scale: 0.74 },
    { x: 14, y: 85.5, type: "white", rotation: 10, scale: 0.86 },
    { x: 25, y: 83, type: "white", rotation: -7, scale: 0.7 },
    { x: 35, y: 86, type: "white", rotation: 13, scale: 0.88 },
    { x: 46, y: 83.5, type: "white", rotation: -15, scale: 0.76 },
    { x: 56, y: 85, type: "white", rotation: 4, scale: 0.82 },
    { x: 67, y: 84, type: "white", rotation: -10, scale: 0.9 },
    { x: 78, y: 86.5, type: "white", rotation: 8, scale: 0.72 },
    { x: 88, y: 84.5, type: "white", rotation: -5, scale: 0.84 },
    { x: 97, y: 87, type: "white", rotation: 11, scale: 0.68 },
    { x: 9, y: 92, type: "white", rotation: 6, scale: 0.8 },
    { x: 20, y: 94, type: "white", rotation: -12, scale: 0.74 },
    { x: 31, y: 91.5, type: "white", rotation: 9, scale: 0.86 },
    { x: 42, y: 94.5, type: "white", rotation: -8, scale: 0.7 },
    { x: 53, y: 92, type: "white", rotation: 14, scale: 0.88 },
    { x: 63, y: 95, type: "white", rotation: -3, scale: 0.76 },
    { x: 74, y: 92.5, type: "white", rotation: 7, scale: 0.82 },
    { x: 85, y: 94, type: "white", rotation: -16, scale: 0.78 },
    { x: 95, y: 93, type: "white", rotation: 5, scale: 0.72 },
    { x: 9, y: 6, type: "yellow", rotation: 18, scale: 0.9 },
    { x: 19, y: 7.5, type: "yellow", rotation: -12, scale: 0.8 },
    { x: 29, y: 5, type: "yellow", rotation: 8, scale: 0.95 },
    { x: 40, y: 7, type: "yellow", rotation: -20, scale: 0.75 },
    { x: 51, y: 5.5, type: "yellow", rotation: 14, scale: 0.88 },
    { x: 63, y: 8, type: "yellow", rotation: -6, scale: 0.82 },
    { x: 74, y: 6, type: "yellow", rotation: 22, scale: 0.78 },
    { x: 85, y: 7.5, type: "yellow", rotation: -15, scale: 0.92 },
    { x: 5, y: 16, type: "yellow", rotation: -10, scale: 0.85 },
    { x: 26, y: 15, type: "yellow", rotation: 16, scale: 0.78 },
    { x: 37, y: 16.5, type: "yellow", rotation: -8, scale: 0.9 },
    { x: 47, y: 14, type: "yellow", rotation: 11, scale: 0.8 },
    { x: 66, y: 16, type: "yellow", rotation: -18, scale: 0.86 },
    { x: 77, y: 17.5, type: "yellow", rotation: 5, scale: 0.75 },
    { x: 88, y: 15, type: "yellow", rotation: -13, scale: 0.92 },
    { x: 10, y: 25, type: "yellow", rotation: 12, scale: 0.88 },
    { x: 20, y: 26.5, type: "yellow", rotation: -16, scale: 0.8 },
    { x: 32, y: 24, type: "yellow", rotation: 7, scale: 0.94 },
    { x: 42, y: 26, type: "yellow", rotation: -9, scale: 0.76 },
    { x: 53, y: 25.5, type: "yellow", rotation: 19, scale: 0.84 },
    { x: 63, y: 27, type: "yellow", rotation: -4, scale: 0.9 },
    { x: 84, y: 25, type: "yellow", rotation: 10, scale: 0.78 },
    { x: 95, y: 26.5, type: "yellow", rotation: -14, scale: 0.82 },
    { x: 1, y: 34, type: "yellow", rotation: 15, scale: 0.8 },
    { x: 17, y: 35, type: "yellow", rotation: -7, scale: 0.92 },
    { x: 28, y: 33.5, type: "yellow", rotation: 20, scale: 0.75 },
    { x: 49, y: 34, type: "yellow", rotation: -11, scale: 0.86 },
    { x: 59, y: 35.5, type: "yellow", rotation: 6, scale: 0.9 },
    { x: 70, y: 33, type: "yellow", rotation: -17, scale: 0.78 },
    { x: 81, y: 35, type: "yellow", rotation: 9, scale: 0.84 },
    { x: 92, y: 34.5, type: "yellow", rotation: -5, scale: 0.88 },
    { x: 12, y: 43, type: "yellow", rotation: -14, scale: 0.82 },
    { x: 22, y: 44.5, type: "yellow", rotation: 8, scale: 0.9 },
    { x: 33, y: 42, type: "yellow", rotation: -19, scale: 0.76 },
    { x: 43, y: 44, type: "yellow", rotation: 13, scale: 0.88 },
    { x: 54, y: 43.5, type: "yellow", rotation: -6, scale: 0.8 },
    { x: 65, y: 45, type: "yellow", rotation: 17, scale: 0.94 },
    { x: 86, y: 43, type: "yellow", rotation: -10, scale: 0.78 },
    { x: 96, y: 44.5, type: "yellow", rotation: 4, scale: 0.86 },
    { x: 8, y: 52, type: "yellow", rotation: 11, scale: 0.9 },
    { x: 19, y: 53.5, type: "yellow", rotation: -15, scale: 0.75 },
    { x: 30, y: 51, type: "yellow", rotation: 7, scale: 0.84 },
    { x: 41, y: 53, type: "yellow", rotation: -12, scale: 0.92 },
    { x: 62, y: 52.5, type: "yellow", rotation: 16, scale: 0.8 },
    { x: 73, y: 54, type: "yellow", rotation: -8, scale: 0.86 },
    { x: 84, y: 52, type: "yellow", rotation: 5, scale: 0.78 },
    { x: 1, y: 53, type: "yellow", rotation: -18, scale: 0.88 },
    { x: 11, y: 61, type: "yellow", rotation: 9, scale: 0.82 },
    { x: 21, y: 62.5, type: "yellow", rotation: -13, scale: 0.9 },
    { x: 38, y: 61, type: "yellow", rotation: 14, scale: 0.76 },
    { x: 48, y: 63, type: "yellow", rotation: -5, scale: 0.88 },
    { x: 58, y: 61.5, type: "yellow", rotation: 18, scale: 0.8 },
    { x: 69, y: 63.5, type: "yellow", rotation: -11, scale: 0.94 },
    { x: 80, y: 61, type: "yellow", rotation: 6, scale: 0.78 },
    { x: 91, y: 62, type: "yellow", rotation: -16, scale: 0.84 },
    { x: 2, y: 70, type: "yellow", rotation: 12, scale: 0.86 },
    { x: 15, y: 71.5, type: "yellow", rotation: -9, scale: 0.8 },
    { x: 26, y: 69, type: "yellow", rotation: 20, scale: 0.92 },
    { x: 36, y: 71, type: "yellow", rotation: -7, scale: 0.75 },
    { x: 47, y: 70.5, type: "yellow", rotation: 10, scale: 0.88 },
    { x: 57, y: 72, type: "yellow", rotation: -14, scale: 0.82 },
    { x: 78, y: 70, type: "yellow", rotation: 5, scale: 0.9 },
    { x: 89, y: 71.5, type: "yellow", rotation: -18, scale: 0.78 },
    { x: 10, y: 79, type: "yellow", rotation: -6, scale: 0.84 },
    { x: 21, y: 80.5, type: "yellow", rotation: 15, scale: 0.9 },
    { x: 32, y: 79, type: "yellow", rotation: -12, scale: 0.76 },
    { x: 43, y: 81, type: "yellow", rotation: 8, scale: 0.88 },
    { x: 53, y: 79.5, type: "yellow", rotation: -19, scale: 0.8 },
    { x: 64, y: 81.5, type: "yellow", rotation: 4, scale: 0.92 },
    { x: 75, y: 80, type: "yellow", rotation: -10, scale: 0.78 },
    { x: 96, y: 79.5, type: "yellow", rotation: 13, scale: 0.86 },
    { x: 5, y: 88, type: "yellow", rotation: 7, scale: 0.8 },
    { x: 17, y: 89.5, type: "yellow", rotation: -14, scale: 0.88 },
    { x: 28, y: 88, type: "yellow", rotation: 11, scale: 0.75 },
    { x: 39, y: 90, type: "yellow", rotation: -8, scale: 0.9 },
    { x: 50, y: 88.5, type: "yellow", rotation: 16, scale: 0.82 },
    { x: 61, y: 90.5, type: "yellow", rotation: -5, scale: 0.86 },
    { x: 72, y: 89, type: "yellow", rotation: 9, scale: 0.78 },
    { x: 83, y: 90, type: "yellow", rotation: -17, scale: 0.94 },
    { x: 93, y: 88.5, type: "yellow", rotation: 3, scale: 0.8 },
    { x: 12, y: 96, type: "yellow", rotation: -11, scale: 0.84 },
    { x: 24, y: 97, type: "yellow", rotation: 14, scale: 0.78 },
    { x: 45, y: 96.5, type: "yellow", rotation: -6, scale: 0.9 },
    { x: 56, y: 97.5, type: "yellow", rotation: 10, scale: 0.76 },
    { x: 77, y: 96, type: "yellow", rotation: -15, scale: 0.88 },
    { x: 88, y: 97, type: "yellow", rotation: 5, scale: 0.82 },
  ];

  const staticPetals = [
    { x: 7, y: 8, rotation: 35, scale: 0.7 },
    { x: 23, y: 9, rotation: -40, scale: 0.55 },
    { x: 45, y: 8, rotation: 60, scale: 0.65 },
    { x: 70, y: 9.5, rotation: -20, scale: 0.5 },
    { x: 92, y: 8, rotation: 45, scale: 0.6 },
    { x: 15, y: 18, rotation: -55, scale: 0.55 },
    { x: 35, y: 17, rotation: 25, scale: 0.7 },
    { x: 55, y: 18.5, rotation: -70, scale: 0.5 },
    { x: 75, y: 17, rotation: 15, scale: 0.6 },
    { x: 8, y: 27, rotation: 50, scale: 0.55 },
    { x: 30, y: 28, rotation: -30, scale: 0.65 },
    { x: 50, y: 27, rotation: 80, scale: 0.5 },
    { x: 70, y: 28.5, rotation: -15, scale: 0.7 },
    { x: 90, y: 27, rotation: 40, scale: 0.55 },
    { x: 18, y: 36, rotation: -45, scale: 0.6 },
    { x: 40, y: 37, rotation: 20, scale: 0.5 },
    { x: 60, y: 36, rotation: -60, scale: 0.65 },
    { x: 82, y: 37.5, rotation: 30, scale: 0.55 },
    { x: 5, y: 45, rotation: 55, scale: 0.7 },
    { x: 26, y: 46, rotation: -25, scale: 0.5 },
    { x: 47, y: 45, rotation: 70, scale: 0.6 },
    { x: 68, y: 46.5, rotation: -35, scale: 0.55 },
    { x: 89, y: 45, rotation: 10, scale: 0.65 },
    { x: 12, y: 54, rotation: -50, scale: 0.55 },
    { x: 33, y: 55, rotation: 40, scale: 0.7 },
    { x: 55, y: 54, rotation: -18, scale: 0.5 },
    { x: 76, y: 55.5, rotation: 65, scale: 0.6 },
    { x: 95, y: 54, rotation: -42, scale: 0.55 },
    { x: 9, y: 63, rotation: 28, scale: 0.65 },
    { x: 30, y: 64, rotation: -75, scale: 0.5 },
    { x: 51, y: 63, rotation: 12, scale: 0.7 },
    { x: 72, y: 64.5, rotation: -48, scale: 0.55 },
    { x: 93, y: 63, rotation: 52, scale: 0.6 },
    { x: 16, y: 72, rotation: -22, scale: 0.55 },
    { x: 38, y: 73, rotation: 38, scale: 0.65 },
    { x: 59, y: 72, rotation: -58, scale: 0.5 },
    { x: 81, y: 73.5, rotation: 8, scale: 0.7 },
    { x: 6, y: 81, rotation: 62, scale: 0.55 },
    { x: 28, y: 82, rotation: -32, scale: 0.6 },
    { x: 49, y: 81, rotation: 45, scale: 0.5 },
    { x: 70, y: 82.5, rotation: -12, scale: 0.65 },
    { x: 91, y: 81, rotation: 72, scale: 0.55 },
    { x: 14, y: 90, rotation: -28, scale: 0.7 },
    { x: 36, y: 91, rotation: 18, scale: 0.5 },
    { x: 58, y: 90, rotation: -65, scale: 0.6 },
    { x: 79, y: 91.5, rotation: 33, scale: 0.55 },
    { x: 98, y: 90, rotation: -8, scale: 0.65 },
    { x: 22, y: 98, rotation: 48, scale: 0.5 },
    { x: 66, y: 98.5, rotation: -38, scale: 0.6 },
  ];

  const TYPE_WIDTH = { white: 4.2, yellow: 2.6, petal: 0.55 };

  const rand = (min, max) => Math.random() * (max - min) + min;

  function windVars() {
    return {
      "--dur": `${rand(3.8, 6.8).toFixed(2)}s`,
      "--delay": `${rand(-4, 0).toFixed(2)}s`,
      "--amp": `${rand(2, 4.5).toFixed(2)}deg`,
    };
  }

  function applyVars(el, vars) {
    Object.entries(vars).forEach(([k, v]) => el.style.setProperty(k, v));
  }

  function createFlora(svgKey, item) {
    const wrap = document.createElement("div");
    wrap.className = `flora flora--${svgKey}`;
    const widthKey = item.type === "white" ? "white" : item.type === "yellow" ? "yellow" : svgKey;
    const w = (TYPE_WIDTH[widthKey] * (item.scale || 1)).toFixed(2);
    applyVars(wrap, windVars());
    wrap.style.left = `${item.x}%`;
    wrap.style.top = `${item.y}%`;
    wrap.style.width = `${w}vw`;
    wrap.style.rotate = `${item.rotation || 0}deg`;
    wrap.style.translate = "-50% -50%";
    const sway = document.createElement("div");
    sway.className = "flora-sway";
    sway.innerHTML = SVG[svgKey];
    wrap.appendChild(sway);
    return wrap;
  }

  function renderFlora() {
    const layer = document.getElementById("flora-layer");
    if (!layer) return;
    const frag = document.createDocumentFragment();
    flowers.forEach((f) => {
      frag.appendChild(createFlora(f.type === "white" ? "daisy" : "yellow", f));
    });
    staticPetals.forEach((p) => {
      const el = document.createElement("div");
      el.className = "flora flora--static-petal";
      const w = (TYPE_WIDTH.petal * (p.scale || 1)).toFixed(2);
      el.style.left = `${p.x}%`;
      el.style.top = `${p.y}%`;
      el.style.width = `${w}vw`;
      el.style.rotate = `${p.rotation || 0}deg`;
      el.style.translate = "-50% -50%";
      el.innerHTML = SVG.petal;
      frag.appendChild(el);
    });
    layer.appendChild(frag);
  }

  /* Floating petals */
  const MAX_FLOATING = 40;
  let floaters = [];
  let lastTs = 0;

  function spawnPetal(fromTop) {
    const layer = document.getElementById("petal-layer");
    if (!layer) return;
    const el = document.createElement("div");
    el.className = "petal";
    const size = rand(0.3, 0.7);
    el.style.setProperty("--petal-size", `${size}vw`);
    el.innerHTML = SVG.petal;
    layer.appendChild(el);
    floaters.push({
      el,
      x: rand(0, 100),
      y: fromTop ? rand(-10, -2) : rand(0, 100),
      vx: rand(-0.01, 0.01),
      vy: rand(0.006, 0.016),
      rot: rand(0, 360),
      vr: rand(-0.35, 0.35),
      life: 0,
      maxLife: rand(14, 30),
      driftPhase: rand(0, Math.PI * 2),
      driftAmp: rand(0.006, 0.02),
      driftSpeed: rand(0.35, 1),
    });
  }

  function tickPetals(ts) {
    if (!lastTs) lastTs = ts;
    const dt = Math.min((ts - lastTs) / 1000, 0.05);
    lastTs = ts;
    while (floaters.length < MAX_FLOATING) spawnPetal(true);
    for (let i = floaters.length - 1; i >= 0; i--) {
      const p = floaters[i];
      p.life += dt;
      p.x += (p.vx + Math.sin(p.life * p.driftSpeed + p.driftPhase) * p.driftAmp) * 60 * dt;
      p.y += p.vy * 60 * dt;
      p.rot += p.vr * 60 * dt;
      let opacity = 0.7;
      if (p.life < 1) opacity *= p.life;
      else if (p.life > p.maxLife - 2) opacity *= Math.max(0, (p.maxLife - p.life) / 2);
      p.el.style.transform = `translate3d(${p.x}vw, ${p.y}vh, 0) rotate(${p.rot}deg)`;
      p.el.style.opacity = String(opacity);
      if (p.y > 108 || p.life >= p.maxLife) {
        p.el.remove();
        floaters.splice(i, 1);
      }
    }
    requestAnimationFrame(tickPetals);
  }

  /* =========================================================
     Invitation UI
     ========================================================= */
  function $(id) {
    return document.getElementById(id);
  }

  function setText(id, text, isPlaceholder) {
    const el = $(id);
    if (!el) return;
    el.textContent = text;
    el.classList.toggle("is-placeholder", Boolean(isPlaceholder));
  }

  function escapeHtml(str) {
    return String(str)
      .replace(/&/g, "&amp;")
      .replace(/</g, "&lt;")
      .replace(/>/g, "&gt;");
  }

  function fillTemplate(str, vars) {
    return str
      .replace(/\{school\}/g, vars.school)
      .replace(/\{name\}/g, vars.name);
  }

  function renderParagraphs(containerId, paragraphs, vars) {
    const el = $(containerId);
    if (!el) return;
    el.innerHTML = paragraphs
      .map((p) => `<p>${escapeHtml(fillTemplate(p, vars))}</p>`)
      .join("");
  }

  function highlightPhrases(text, phrases) {
    let html = escapeHtml(text);
    (phrases || []).forEach((phrase) => {
      const re = new RegExp(
        `(${phrase.replace(/[.*+?^${}()|[\]\\]/g, "\\$&")})`,
        "i"
      );
      html = html.replace(re, '<span class="thanks-highlight">$1</span>');
    });
    return html;
  }

  function renderInvitation() {
    const d = invitationData;
    const vars = {
      school: d.schoolShort || d.school,
      name: "mình",
    };

    renderParagraphs("story-1-text", d.stories.one, vars);
    renderParagraphs("story-2-text", d.stories.two, vars);
    renderParagraphs("story-3-text", d.stories.three, vars);

    setText("intro-message", d.introMessage);
    setText("thanks-message", d.thanksMessage);
    const emphasisEl = $("thanks-message-emphasis");
    if (emphasisEl) {
      emphasisEl.innerHTML = highlightPhrases(
        d.thanksMessageEmphasis,
        d.thanksHighlights
      );
    }

    const formalLead = $("formal-lead");
    if (formalLead) {
      formalLead.innerHTML = `đến tham dự <strong>Lễ Tốt Nghiệp</strong> của <strong>${escapeHtml(
        d.graduateName
      )}</strong>`;
    }

    const mastheadName = $("masthead-name");
    if (mastheadName) {
      mastheadName.textContent = d.graduateName;
    }

    setText("datetime", d.datetime, d.datetimeIsPlaceholder);

    const venueEl = $("venue");
    if (venueEl) {
      venueEl.textContent = d.venue;
      venueEl.classList.toggle("is-placeholder", Boolean(d.venueIsPlaceholder));
      if (d.venueMapsUrl) {
        venueEl.href = d.venueMapsUrl;
        venueEl.setAttribute("aria-label", `Mở bản đồ: ${d.venue}`);
      }
    }

    const venueMapsBtn = $("btn-venue-maps");
    if (venueMapsBtn) {
      if (d.venueMapsUrl) {
        venueMapsBtn.hidden = false;
        venueMapsBtn.href = d.venueMapsUrl;
      } else {
        venueMapsBtn.hidden = true;
      }
    }

    setText("formal-gift", d.formalGift);
    setText("footer-sign", d.footerSign);
    setText("parking-badge", d.parking.badge);
    setText("parking-address", d.parking.address, false);
    setText("parking-entrance", d.parking.entrance, false);
    setText("parking-fee", d.parking.feeHours, false);
    setText("parking-walk", d.parking.walkGuide, false);

    const contact = $("contact-phone");
    if (contact) {
      const digits = d.phone.replace(/\s+/g, "");
      contact.href = `tel:${digits}`;
      contact.textContent = d.phone;
      contact.setAttribute("aria-label", `Gọi ${d.phone}`);
    }

    const mapsBtn = $("btn-maps");
    if (mapsBtn) {
      if (d.parking.mapsUrl) {
        mapsBtn.hidden = false;
        mapsBtn.href = d.parking.mapsUrl;
        mapsBtn.removeAttribute("aria-disabled");
        mapsBtn.classList.remove("is-disabled");
      } else {
        mapsBtn.hidden = true;
        mapsBtn.href = "#";
        mapsBtn.setAttribute("aria-disabled", "true");
        mapsBtn.classList.add("is-disabled");
      }
    }
  }

  /* Scroll reveal — sections fade/slide in as they enter the viewport */
  let revealObserver = null;

  function setupScrollReveal() {
    const targets = document.querySelectorAll(".reveal");
    if (!targets.length) return;

    const preferReduced =
      window.matchMedia && window.matchMedia("(prefers-reduced-motion: reduce)").matches;

    if (preferReduced || !("IntersectionObserver" in window)) {
      targets.forEach((el) => el.classList.add("is-revealed"));
      return;
    }

    if (revealObserver) revealObserver.disconnect();

    revealObserver = new IntersectionObserver(
      (entries, obs) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("is-revealed");
            obs.unobserve(entry.target);
          }
        });
      },
      { root: null, rootMargin: "0px 0px -12% 0px", threshold: 0.12 }
    );

    targets.forEach((el) => {
      el.classList.remove("is-revealed");
      revealObserver.observe(el);
    });
  }

  function resetScrollReveal() {
    if (revealObserver) {
      revealObserver.disconnect();
      revealObserver = null;
    }
    document
      .querySelectorAll(".reveal")
      .forEach((el) => el.classList.remove("is-revealed"));
  }

  /* Background music — starts on load when allowed, then unlocks on first gesture */
  const MUSIC_VOLUME = 0.35;

  function playBackgroundMusic() {
    const music = $("background-music");
    if (!music) return Promise.resolve(false);

    music.volume = MUSIC_VOLUME;
    music.loop = true;

    const playPromise = music.play();
    if (!playPromise || typeof playPromise.then !== "function") {
      return Promise.resolve(true);
    }

    return playPromise
      .then(() => true)
      .catch(() => false);
  }

  function setupBackgroundMusic() {
    const music = $("background-music");
    if (!music) return;

    music.volume = MUSIC_VOLUME;
    music.loop = true;
    playBackgroundMusic();

    const unlockMusic = () => {
      playBackgroundMusic().then((didPlay) => {
        if (didPlay) {
          document.removeEventListener("pointerdown", unlockMusic);
          document.removeEventListener("keydown", unlockMusic);
          document.removeEventListener("touchstart", unlockMusic);
        }
      });
    };

    document.addEventListener("pointerdown", unlockMusic);
    document.addEventListener("keydown", unlockMusic);
    document.addEventListener("touchstart", unlockMusic);
  }

  /* Envelope open / close — session only (no localStorage) */
  let isOpen = false;
  let lastFocus = null;

  function openInvitation() {
    if (isOpen) return;
    isOpen = true;

    const envelope = $("envelope");
    const envelopeBtn = $("envelope-btn");
    const envelopeScreen = $("envelope-screen");
    const inviteScreen = $("invitation-screen");

    lastFocus = document.activeElement;
    if (envelope) envelope.classList.add("is-opening");
    if (envelopeBtn) envelopeBtn.setAttribute("aria-expanded", "true");

    const preferReduced =
      window.matchMedia && window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    const delay = preferReduced ? 0 : 520;

    window.setTimeout(() => {
      if (envelopeScreen) envelopeScreen.classList.add("is-hidden");
      if (inviteScreen) {
        inviteScreen.hidden = false;
        inviteScreen.setAttribute("aria-hidden", "false");
        inviteScreen.classList.add("is-visible");
        window.scrollTo(0, 0);
        inviteScreen.focus({ preventScroll: true });
        setupScrollReveal();
      }
    }, delay);
  }

  function closeInvitation() {
    if (!isOpen) return;
    isOpen = false;

    const envelope = $("envelope");
    const envelopeBtn = $("envelope-btn");
    const envelopeScreen = $("envelope-screen");
    const inviteScreen = $("invitation-screen");

    if (inviteScreen) {
      inviteScreen.classList.remove("is-visible");
      inviteScreen.hidden = true;
      inviteScreen.setAttribute("aria-hidden", "true");
    }
    if (envelopeScreen) envelopeScreen.classList.remove("is-hidden");
    if (envelope) envelope.classList.remove("is-opening");
    resetScrollReveal();
    if (envelopeBtn) {
      envelopeBtn.setAttribute("aria-expanded", "false");
      envelopeBtn.focus();
    } else if (lastFocus && lastFocus.focus) {
      lastFocus.focus();
    }
    window.scrollTo({ top: 0, behavior: "auto" });
  }

  function bindInteractions() {
    const envelopeBtn = $("envelope-btn");
    const closeBtn = $("btn-close");

    if (envelopeBtn) {
      envelopeBtn.addEventListener("click", openInvitation);
      envelopeBtn.addEventListener("keydown", (e) => {
        if (e.key === "Enter" || e.key === " ") {
          e.preventDefault();
          openInvitation();
        }
      });
    }

    if (closeBtn) {
      closeBtn.addEventListener("click", closeInvitation);
    }

    document.addEventListener("keydown", (e) => {
      if (e.key === "Escape" && isOpen) closeInvitation();
    });
  }

  function init() {
    renderFlora();
    for (let i = 0; i < MAX_FLOATING; i++) spawnPetal(false);
    requestAnimationFrame(tickPetals);
    renderInvitation();
    bindInteractions();
    setupBackgroundMusic();
  }

  if (document.readyState === "loading") {
    document.addEventListener("DOMContentLoaded", init);
  } else {
    init();
  }
})();
