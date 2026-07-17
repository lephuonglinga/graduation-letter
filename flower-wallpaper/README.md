# Thư mời tốt nghiệp — Lê Phương Thảo Linh

Thiệp mời tương tác: phong thư bay lên → chạm để mở → nội dung lễ, lời cảm ơn, thông tin gửi xe và RSVP. Nền hoa cúc pastel SVG.

## Xem nhanh

Mở `index.html` trong trình duyệt, hoặc:

```bash
npx serve .
# hoặc
python -m http.server 8080
```

Mỗi lần tải trang mới sẽ hiện lại phong thư (không lưu trạng thái “đã mở”).

## Cập nhật nội dung

Sửa object `invitationData` ở đầu file [`script.js`](script.js):

| Trường | Ý nghĩa |
|--------|---------|
| `graduateName`, `initials`, `honor` | Tên, viết tắt ảnh, danh hiệu |
| `school`, `major` | Trường, ngành |
| `datetime`, `datetimeIsPlaceholder` | Ngày giờ (đặt `false` khi có lịch thật) |
| `venue`, `venueIsPlaceholder` | Hội trường / địa điểm |
| `photoUrl` | Đường dẫn ảnh chân dung, vd. `assets/linh.jpg` (để trống = hiện `TL`) |
| `inviteMessage`, `thanksMessage` | Lời mời & cảm ơn (xưng hô mình–bạn) |
| `phone` | Số điện thoại RSVP |
| `parking.address` / `entrance` / `feeHours` / `walkGuide` | Hướng dẫn gửi xe |
| `parking.mapsUrl` | URL Google/Apple Maps — có URL thì nút “Mở bản đồ” hiện |
| `parking.badge` | Nhãn cảnh báo thông tin dự kiến |

## Cấu trúc

```
flower-wallpaper/
├── index.html
├── style.css
├── script.js
├── README.md
└── svg/
    ├── daisy.svg
    ├── yellow.svg
    ├── petal.svg
    ├── grass.svg      (không dùng trên thiệp)
    └── branch.svg     (không dùng trên thiệp)
```

## Trải nghiệm

1. Phong thư xuất hiện từ dưới lên, sau đó float nhẹ.
2. Chạm / Enter / Space → nắp thư mở → thiệp hiện.
3. Nút **← Phong thư** hoặc `Esc` để xem lại phong thư.
4. **Gọi điện** dùng `tel:`; **Mình sẽ đến!** ghi nhận RSVP trong phiên.
5. Tôn trọng `prefers-reduced-motion`.

## Ghi chú gửi xe

Khối gửi xe đang dùng **placeholder** và badge *“Thông tin dự kiến — vui lòng kiểm tra lại”* để khách không hiểu nhầm là thông tin chính thức.
