import Header from "@/layouts/Header";
import avatar from "../assets/image/avt/avt.jpg";
import Image from "next/image";
import Link from "next/link";

export default function HomeRoute() {
  return (
    <>
      <Header />
      <main className="pb-10 pt-2">
        <div className="max-w-7xl xl:mx-auto container rounded-xl border-2 border-gray-200 mt-1.5 shadow-md bg-light-200 dark:bg-dark-200 dark:border-transparent">
          <div className="w-full">
            <h1 className="text-2xl text-center font-medium pt-3">
              Đỗ Văn Khoa
            </h1>
          </div>
          <div className="p-3 flex justify-between">
            <aside className="max-w-[300px] w-[300px]">
              <figure className=" relative z-0 overflow-hidden m-2 p-4 rounded-full inline-block">
                <div className=" absolute z-1 inset-5 rounded-full overflow-hidden">
                  <Image
                    src={avatar}
                    alt="avatar"
                    className=" w-full z-0 rounded-full ease-in-out duration-400 hover:scale-[1.3]"
                  />
                </div>
                <Image
                  src={avatar}
                  alt="avatar"
                  className=" w-full relative z-[-1] blur-lg dark:brightness-[0.7] rounded-full"
                />
              </figure>
              <figcaption className=" text-center font-semibold">
                Front-end developer
              </figcaption>
              <section>
                <h2 className="mt-2 text-xl font-bold dark:text-100">
                  Các kỹ năng của tôi
                </h2>
                <ul className="mt-2">
                  <li className=" text-light-200 dark:text-dark-200 border-b-2 pb-1">
                    <h3 className=" inline-block font-bold text-light-100 dark:text-100">
                      Kỹ năng làm việc
                    </h3>
                    : REST API, React.js, Next.js, Redux, Context, CSS3, HTML5,
                    UI/UX, Figma, Photoshop...
                  </li>
                  <li className=" text-light-200 dark:text-dark-200">
                    <h3 className=" inline-block font-bold text-light-100 dark:text-100 pt-1">
                      Các kỹ năng khác
                    </h3>
                    : Kỹ năng nghiên cứu và tìm kiếm tương đối tốt. Tư duy làm
                    việc, kỹ năng làm việc nhóm tốt so với độ tuổi.
                  </li>
                </ul>
              </section>
              <section>
                <h2 className="mt-2 text-xl font-bold dark:text-100">
                  Lịch sử
                </h2>
                <ul className="mt-2">
                  <li className=" text-light-200 dark:text-dark-200 border-b-2 pb-1">
                    <h3 className=" inline-block font-bold text-light-100 dark:text-100 pb-1">
                      2016
                    </h3>
                    : Thất nghiệp
                  </li>
                  <li className=" text-light-200 dark:text-dark-200 border-b-2 p-1">
                    <h3 className=" inline-block font-bold text-light-100 dark:text-100">
                      2017-2019
                    </h3>
                    : Thất nghiệp Thất nghiệp
                  </li>
                  <li className=" text-light-200 dark:text-dark-200 border-b-2 p-1">
                    <h3 className=" inline-block font-bold text-light-100 dark:text-100">
                      2019-2021
                    </h3>
                    : Thất nghiệp Thất nghiệp Thất nghiệp Thất nghiệp
                  </li>
                  <li className=" text-light-200 dark:text-dark-200 border-b-2 p-1">
                    <h3 className=" inline-block font-bold text-light-100 dark:text-100">
                      2022-2023
                    </h3>
                    : Thất nghiệp Thất nghiệp Thất nghiệp Thất nghiệp Thất
                    nghiệp
                  </li>
                </ul>
              </section>
            </aside>
            <div className=" max-w-[900px] w-full">
              <section className=" border-b-2 pb-2">
                <div>
                  <h2 className="mt-2 text-xl font-medium text-center">
                    Thông tin liên hệ
                  </h2>
                </div>
                <ul className="mt-2">
                  <li>
                    Phone:{" "}
                    <Link
                      href={"tel:0853888885"}
                      className=" text-100"
                      target="_blank"
                    >
                      0853888885
                    </Link>
                  </li>
                  <li>
                    Zalo:{" "}
                    <Link
                      href={"https://zalo.me"}
                      className=" text-100"
                      target="_blank"
                    >
                      https://zalo.me
                    </Link>
                  </li>
                  <li>
                    Email:{" "}
                    <Link
                      href={"mailto:contact@fullstack.edu.vn"}
                      className=" text-100"
                      target="_blank"
                    >
                      contact@fullstack.edu.vn
                    </Link>
                  </li>
                  <li>
                    Facebook:{" "}
                    <Link
                      href={"https://www.facebook.com/groups/f8official"}
                      className=" text-100"
                      target="_blank"
                    >
                      https://www.facebook.com/groups/f8official
                    </Link>
                  </li>
                  <li>
                    Youtube:{" "}
                    <Link
                      href={"https://www.youtube.com/c/f8vnofficial"}
                      className=" text-100"
                      target="_blank"
                    >
                      https://www.youtube.com/c/f8vnofficial
                    </Link>
                  </li>
                </ul>
              </section>
              <section>
                <div className="mt-4 border-1.5 dark:border-transparent rounded-lg pt-2 px-5 shadow-inner dark:bg-dark-300">
                  <div>
                    <h2 className="mt-2 text-xl font-medium text-center">
                      Các dự án cá nhân
                    </h2>
                  </div>
                  <div className=" border-b-2 pb-3">
                    <h3 className=" text-xl">Project Code snippet</h3>
                    <p className="text-md my-2">
                      Một dự án nhỏ hoàn thành trong vòng một ngày <br /> Một
                      trang web đơn giản cho phép tạo và chia sẻ các đoạn code.
                      Sử dụng HTML, CSS, JS và custom elements.
                    </p>
                    <div className="flex gap-3">
                      <Link href={"/"} className=" text-100" target="_blank">
                        Demo
                      </Link>
                      <Link
                        href={"https://github.com/mrkhoadev/F8-Fullstack-K3"}
                        className=" text-100"
                        target="_blank"
                      >
                        Code
                      </Link>
                    </div>
                  </div>
                  <div className=" border-b-2 py-3">
                    <h3 className=" text-xl">Project blog</h3>
                    <p className="text-md my-2">
                      Một dự án nhỏ hoàn thành trong vòng một ngày <br /> Một
                      trang web đơn giản cho phép tạo và chia sẻ các đoạn code.
                      Sử dụng HTML, CSS, JS và custom elements.
                    </p>
                    <div className="flex gap-3">
                      <Link href={"/"} className=" text-100" target="_blank">
                        Demo
                      </Link>
                      <Link
                        href={"https://github.com/mrkhoadev/F8-Fullstack-K3"}
                        className=" text-100"
                        target="_blank"
                      >
                        Code
                      </Link>
                    </div>
                  </div>
                  <div className=" border-b-2 py-3">
                    <h3 className=" text-xl">Project 20f8</h3>
                    <p className="text-md my-2">
                      Một dự án nhỏ hoàn thành trong vòng một ngày <br /> Một
                      trang web đơn giản cho phép tạo và chia sẻ các đoạn code.
                      Sử dụng HTML, CSS, JS và custom elements.
                    </p>
                    <div className="flex gap-3">
                      <Link href={"/"} className=" text-100" target="_blank">
                        Demo
                      </Link>
                      <Link
                        href={"https://github.com/mrkhoadev/F8-Fullstack-K3"}
                        className=" text-100"
                        target="_blank"
                      >
                        Code
                      </Link>
                    </div>
                  </div>
                  <div className="py-3 text-100">
                    <Link
                      href={"https://github.com/mrkhoadev/F8-Fullstack-K3"}
                      target="_blank"
                    >
                      https://github.com/mrkhoadev/F8-Fullstack-K3
                    </Link>
                  </div>
                </div>
              </section>
              <section className="mt-5">
                <div>
                  <h2 className="mt-2 text-xl font-medium text-center">
                    Sở thích cá nhân
                  </h2>
                </div>
                <ul className="mt-4 list-disc px-5 flex-col gap-y-3">
                  <li>
                    Thưởng Thức Nhạc Nhẹ, Nhạc Rap Của Đen Vâu Và Các Nghệ Sĩ
                    Khác,…
                  </li>
                  <li>
                    Đọc Sách, Học Hỏi Thêm Về Các Ngôn Ngữ Lập Trình Mới Mẻ.
                    Hiện Tại, Tôi Đang Tự Học Python
                  </li>
                  <li>
                    Theo Dõi Các Xu Hướng Công Nghệ, Tin Tức Về Các Sản Phẩm Nổi
                    Tiếng Như Iphone, Huawei, GoogleAI,…
                  </li>
                </ul>
              </section>
            </div>
          </div>
          <div className="p-3 max-w-full text-100 text-center">
            © 2023 Fullstack.edu.vn F8. All rights reserved.
          </div>
        </div>
      </main>
    </>
  );
}
