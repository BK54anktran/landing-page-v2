import Image from "next/image";
import { Link } from "@/i18n/navigation";

interface NotFound {
  title?: string;
}

export default function NotFound({
  title = "Đường dẫn không tồn tại hoặc đã bị xóa!",
}: NotFound) {
  return (
    <div className="flex min-h-screen">
      <div className="m-auto px-5">
        <div className="">
          <div className="text-center">
            <h1 className="mb-3 text-2xl font-medium">{title}</h1>
            <p>Vui lòng liên hệ với hỗ trợ để biết thêm chi tiết.</p>
          </div>
          <Image
            src={"/images/404.svg"}
            width={400}
            height={500}
            priority
            alt="error"
          />
          <div className="text-center">
            <Link href={"/"} className="text-primary-500 underline">
              Quay lại
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}
