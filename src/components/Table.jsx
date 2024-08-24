import React from "react";
import Pagination from "./Pagination";
import avatar from "../img/avatar.png";
import UsersFilter from "./UsersFilter";

const Table = ({ type }) => {
  return (
    <div className=" rounded-lg overflow-x-auto  mx-8 flex flex-col     med-outlet ">
      <div>{/* <UsersFilter /> */}</div>
      {type === "exams" ? (
        <table className="  w-full flex-grow   ">
          <thead className="bg-lightGray text-tableHead">
            <tr>
              <th className="text-tableHead font-normal text-x-[16px]">
                <h2>{<UsersFilter />}</h2>
                {/* <UsersFilter /> */}
              </th>
              <th className="text-tableHead font-normal text-x-[16px]">
                عدد الطلاب
              </th>
              <th className="text-tableHead font-normal text-x-[16px]">
                عدد الطلاب الممتحنين
              </th>
              <th className="text-tableHead font-normal text-x-[16px]">
                متوسط الدرجات
              </th>
              <th className="text-tableHead font-normal text-x-[16px] ">
                التاريخ
              </th>
              <th className="text-tableHead font-normal text-x-[14px] ">
                السنة الدراسية
              </th>
              <th></th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>
                <div className="flex justify-center items-center gap-4">
                  <div className="w-11 rounded-full overflow-hidden">
                    <img src={avatar} alt="" />
                  </div>
                  <div className="text-right">
                    <h1 className="font-medium  text-sm text-darkGray ">
                      سيف الدين محمود
                    </h1>
                    <p className="text-lightText text-[12px]">
                      seenaseif@gmail.com
                    </p>
                  </div>
                </div>
              </td>
              <td>1234567890</td>
              <td>1234567890</td>
              <td>
                <div className="m-auto w-fit px-4 py-2 bg-statusGreen rounded-3xl ">
                  <p className="text-xs text-lightText font-normal m-auto">
                    65%
                  </p>
                </div>
              </td>
              <td>1234567890</td>
              <td>
                <p className="cursor-pointer m-auto py-1 px-5 border border-darckBlue w-fit rounded-3xl text-darckBlue text-[16px]">
                  فتح
                </p>
              </td>
            </tr>
            <tr>
              <td>
                <div className="flex justify-center items-center gap-4">
                  <div className="w-11 rounded-full overflow-hidden">
                    <img src={avatar} alt="" />
                  </div>
                  <div className="text-right">
                    <h1 className="font-medium  text-sm text-darkGray ">
                      سيف الدين محمود
                    </h1>
                    <p className="text-lightText text-[12px]">
                      seenaseif@gmail.com
                    </p>
                  </div>
                </div>
              </td>
              <td>1234567890</td>
              <td>1234567890</td>
              <td>
                <div className="m-auto w-fit px-4 py-2 bg-statusGreen rounded-3xl ">
                  <p className="text-xs text-lightText font-normal m-auto">
                    65%
                  </p>
                </div>
              </td>
              <td>1234567890</td>
              <td>
                <p className="cursor-pointer m-auto py-1 px-5 border border-darckBlue w-fit rounded-3xl text-darckBlue text-[16px]">
                  فتح
                </p>
              </td>
            </tr>
            <tr>
              <td>
                <div className="flex justify-center items-center gap-4">
                  <div className="w-11 rounded-full overflow-hidden">
                    <img src={avatar} alt="" />
                  </div>
                  <div className="text-right">
                    <h1 className="font-medium  text-sm text-darkGray ">
                      سيف الدين محمود
                    </h1>
                    <p className="text-lightText text-[12px]">
                      seenaseif@gmail.com
                    </p>
                  </div>
                </div>
              </td>
              <td>1234567890</td>
              <td>1234567890</td>
              <td>
                <div className="m-auto w-fit px-4 py-2 bg-statusGreen rounded-3xl ">
                  <p className="text-xs text-lightText font-normal m-auto">
                    65%
                  </p>
                </div>
              </td>
              <td>1234567890</td>
              <td>
                <p className="cursor-pointer m-auto py-1 px-5 border border-darckBlue w-fit rounded-3xl text-darckBlue text-[16px]">
                  فتح
                </p>
              </td>
            </tr>
            <tr>
              <td>
                <div className="flex justify-center items-center gap-4">
                  <div className="w-11 rounded-full overflow-hidden">
                    <img src={avatar} alt="" />
                  </div>
                  <div className="text-right">
                    <h1 className="font-medium  text-sm text-darkGray ">
                      سيف الدين محمود
                    </h1>
                    <p className="text-lightText text-[12px]">
                      seenaseif@gmail.com
                    </p>
                  </div>
                </div>
              </td>
              <td>1234567890</td>
              <td>1234567890</td>
              <td>
                <div className="m-auto w-fit px-4 py-2 bg-statusGreen rounded-3xl ">
                  <p className="text-xs text-lightText font-normal m-auto">
                    65%
                  </p>
                </div>
              </td>
              <td>1234567890</td>
              <td>
                <p className="cursor-pointer m-auto py-1 px-5 border border-darckBlue w-fit rounded-3xl text-darckBlue text-[16px]">
                  فتح
                </p>
              </td>
            </tr>
            <tr>
              <td>
                <div className="flex justify-center items-center gap-4">
                  <div className="w-11 rounded-full overflow-hidden">
                    <img src={avatar} alt="" />
                  </div>
                  <div className="text-right">
                    <h1 className="font-medium  text-sm text-darkGray ">
                      سيف الدين محمود
                    </h1>
                    <p className="text-lightText text-[12px]">
                      seenaseif@gmail.com
                    </p>
                  </div>
                </div>
              </td>
              <td>1234567890</td>
              <td>1234567890</td>
              <td>
                <div className="m-auto w-fit px-4 py-2 bg-statusGreen rounded-3xl ">
                  <p className="text-xs text-lightText font-normal m-auto">
                    65%
                  </p>
                </div>
              </td>
              <td>1234567890</td>
              <td>
                <p className="cursor-pointer m-auto py-1 px-5 border border-darckBlue w-fit rounded-3xl text-darckBlue text-[16px]">
                  فتح
                </p>
              </td>
            </tr>
            <tr>
              <td>
                <div className="flex justify-center items-center gap-4">
                  <div className="w-11 rounded-full overflow-hidden">
                    <img src={avatar} alt="" />
                  </div>
                  <div className="text-right">
                    <h1 className="font-medium  text-sm text-darkGray ">
                      سيف الدين محمود
                    </h1>
                    <p className="text-lightText text-[12px]">
                      seenaseif@gmail.com
                    </p>
                  </div>
                </div>
              </td>
              <td>1234567890</td>
              <td>1234567890</td>
              <td>
                <div className="m-auto w-fit px-4 py-2 bg-statusGreen rounded-3xl ">
                  <p className="text-xs text-lightText font-normal m-auto">
                    65%
                  </p>
                </div>
              </td>
              <td>1234567890</td>
              <td>
                <p className="cursor-pointer m-auto py-1 px-5 border border-darckBlue w-fit rounded-3xl text-darckBlue text-[16px]">
                  فتح
                </p>
              </td>
            </tr>
            <tr>
              <td>
                <div className="flex justify-center items-center gap-4">
                  <div className="w-11 rounded-full overflow-hidden">
                    <img src={avatar} alt="" />
                  </div>
                  <div className="text-right">
                    <h1 className="font-medium  text-sm text-darkGray ">
                      سيف الدين محمود
                    </h1>
                    <p className="text-lightText text-[12px]">
                      seenaseif@gmail.com
                    </p>
                  </div>
                </div>
              </td>
              <td>1234567890</td>
              <td>1234567890</td>
              <td>
                <div className="m-auto w-fit px-4 py-2 bg-statusGreen rounded-3xl ">
                  <p className="text-xs text-lightText font-normal m-auto">
                    65%
                  </p>
                </div>
              </td>
              <td>1234567890</td>
              <td>
                <p className="cursor-pointer m-auto py-1 px-5 border border-darckBlue w-fit rounded-3xl text-darckBlue text-[16px]">
                  فتح
                </p>
              </td>
            </tr>
            <tr>
              <td>
                <div className="flex justify-center items-center gap-4">
                  <div className="w-11 rounded-full overflow-hidden">
                    <img src={avatar} alt="" />
                  </div>
                  <div className="text-right">
                    <h1 className="font-medium  text-sm text-darkGray ">
                      سيف الدين محمود
                    </h1>
                    <p className="text-lightText text-[12px]">
                      seenaseif@gmail.com
                    </p>
                  </div>
                </div>
              </td>
              <td>1234567890</td>
              <td>1234567890</td>
              <td>
                <div className="m-auto w-fit px-4 py-2 bg-statusGreen rounded-3xl ">
                  <p className="text-xs text-lightText font-normal m-auto">
                    65%
                  </p>
                </div>
              </td>
              <td>1234567890</td>
              <td>
                <p className="cursor-pointer m-auto py-1 px-5 border border-darckBlue w-fit rounded-3xl text-darckBlue text-[16px]">
                  فتح
                </p>
              </td>
            </tr>
          </tbody>
          <tfoot className="text-center">
            <tr>
              <td colSpan={2}>
                <Pagination />
              </td>
            </tr>
          </tfoot>
        </table>
      ) : (
        <table className="  w-full   flex-grow  ">
          <thead className="bg-lightGray text-tableHead">
            <tr>
              <th className="text-tableHead font-normal text-x-[16px]">
                المستخدم
              </th>
              <th className="text-tableHead font-normal text-x-[16px]">
                رقم الطالب
              </th>
              <th className="text-tableHead font-normal text-x-[16px]">
                رقم ولي الأمر
              </th>
              <th className="text-tableHead font-normal text-x-[16px]">
                التقييم
              </th>
              <th className="text-tableHead font-normal text-[14px] ">
                عدد الكورسات
              </th>
              <th></th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>
                <div className="flex justify-center items-center gap-4">
                  <div className="w-11 rounded-full overflow-hidden">
                    <img src={avatar} alt="" />
                  </div>
                  <div className="text-right">
                    <h1 className="font-medium  text-sm text-darkGray ">
                      سيف الدين محمود
                    </h1>
                    <p className="text-lightText text-[12px]">
                      seenaseif@gmail.com
                    </p>
                  </div>
                </div>
              </td>
              <td>1234567890</td>
              <td>1234567890</td>
              <td>
                <div className="m-auto w-fit px-4 py-2 bg-statusGreen rounded-3xl ">
                  <p className="text-xs text-lightText font-normal m-auto">
                    65%
                  </p>
                </div>
              </td>
              <td>1234567890</td>
              <td>
                <p className="cursor-pointer m-auto py-1 px-5 border border-darckBlue w-fit rounded-3xl text-darckBlue text-[16px]">
                  فتح
                </p>
              </td>
            </tr>
            <tr>
              <td>
                <div className="flex justify-center items-center gap-4">
                  <div className="w-11 rounded-full overflow-hidden">
                    <img src={avatar} alt="" />
                  </div>
                  <div className="text-right">
                    <h1 className="font-medium  text-sm text-darkGray ">
                      سيف الدين محمود
                    </h1>
                    <p className="text-lightText text-[12px]">
                      seenaseif@gmail.com
                    </p>
                  </div>
                </div>
              </td>
              <td>1234567890</td>
              <td>1234567890</td>
              <td>
                <div className="m-auto w-fit px-4 py-2 bg-statusGreen rounded-3xl ">
                  <p className="text-xs text-lightText font-normal m-auto">
                    65%
                  </p>
                </div>
              </td>
              <td>1234567890</td>
              <td>
                <p className="cursor-pointer m-auto py-1 px-5 border border-darckBlue w-fit rounded-3xl text-darckBlue text-[16px]">
                  فتح
                </p>
              </td>
            </tr>
            <tr>
              <td>
                <div className="flex justify-center items-center gap-4">
                  <div className="w-11 rounded-full overflow-hidden">
                    <img src={avatar} alt="" />
                  </div>
                  <div className="text-right">
                    <h1 className="font-medium  text-sm text-darkGray ">
                      سيف الدين محمود
                    </h1>
                    <p className="text-lightText text-[12px]">
                      seenaseif@gmail.com
                    </p>
                  </div>
                </div>
              </td>
              <td>1234567890</td>
              <td>1234567890</td>
              <td>
                <div className="m-auto w-fit px-4 py-2 bg-statusGreen rounded-3xl ">
                  <p className="text-xs text-lightText font-normal m-auto">
                    65%
                  </p>
                </div>
              </td>
              <td>1234567890</td>
              <td>
                <p className="cursor-pointer m-auto py-1 px-5 border border-darckBlue w-fit rounded-3xl text-darckBlue text-[16px]">
                  فتح
                </p>
              </td>
            </tr>
            <tr>
              <td>
                <div className="flex justify-center items-center gap-4">
                  <div className="w-11 rounded-full overflow-hidden">
                    <img src={avatar} alt="" />
                  </div>
                  <div className="text-right">
                    <h1 className="font-medium  text-sm text-darkGray ">
                      سيف الدين محمود
                    </h1>
                    <p className="text-lightText text-[12px]">
                      seenaseif@gmail.com
                    </p>
                  </div>
                </div>
              </td>
              <td>1234567890</td>
              <td>1234567890</td>
              <td>
                <div className="m-auto w-fit px-4 py-2 bg-statusGreen rounded-3xl ">
                  <p className="text-xs text-lightText font-normal m-auto">
                    65%
                  </p>
                </div>
              </td>
              <td>1234567890</td>
              <td>
                <p className="cursor-pointer m-auto py-1 px-5 border border-darckBlue w-fit rounded-3xl text-darckBlue text-[16px]">
                  فتح
                </p>
              </td>
            </tr>
            <tr>
              <td>
                <div className="flex justify-center items-center gap-4">
                  <div className="w-11 rounded-full overflow-hidden">
                    <img src={avatar} alt="" />
                  </div>
                  <div className="text-right">
                    <h1 className="font-medium  text-sm text-darkGray ">
                      سيف الدين محمود
                    </h1>
                    <p className="text-lightText text-[12px]">
                      seenaseif@gmail.com
                    </p>
                  </div>
                </div>
              </td>
              <td>1234567890</td>
              <td>1234567890</td>
              <td>
                <div className="m-auto w-fit px-4 py-2 bg-statusGreen rounded-3xl ">
                  <p className="text-xs text-lightText font-normal m-auto">
                    65%
                  </p>
                </div>
              </td>
              <td>1234567890</td>
              <td>
                <p className="cursor-pointer m-auto py-1 px-5 border border-darckBlue w-fit rounded-3xl text-darckBlue text-[16px]">
                  فتح
                </p>
              </td>
            </tr>
            <tr>
              <td>
                <div className="flex justify-center items-center gap-4">
                  <div className="w-11 rounded-full overflow-hidden">
                    <img src={avatar} alt="" />
                  </div>
                  <div className="text-right">
                    <h1 className="font-medium  text-sm text-darkGray ">
                      سيف الدين محمود
                    </h1>
                    <p className="text-lightText text-[12px]">
                      seenaseif@gmail.com
                    </p>
                  </div>
                </div>
              </td>
              <td>1234567890</td>
              <td>1234567890</td>
              <td>
                <div className="m-auto w-fit px-4 py-2 bg-statusGreen rounded-3xl ">
                  <p className="text-xs text-lightText font-normal m-auto">
                    65%
                  </p>
                </div>
              </td>
              <td>1234567890</td>
              <td>
                <p className="cursor-pointer m-auto py-1 px-5 border border-darckBlue w-fit rounded-3xl text-darckBlue text-[16px]">
                  فتح
                </p>
              </td>
            </tr>
            <tr>
              <td>
                <div className="flex justify-center items-center gap-4">
                  <div className="w-11 rounded-full overflow-hidden">
                    <img src={avatar} alt="" />
                  </div>
                  <div className="text-right">
                    <h1 className="font-medium  text-sm text-darkGray ">
                      سيف الدين محمود
                    </h1>
                    <p className="text-lightText text-[12px]">
                      seenaseif@gmail.com
                    </p>
                  </div>
                </div>
              </td>
              <td>1234567890</td>
              <td>1234567890</td>
              <td>
                <div className="m-auto w-fit px-4 py-2 bg-statusGreen rounded-3xl ">
                  <p className="text-xs text-lightText font-normal m-auto">
                    65%
                  </p>
                </div>
              </td>
              <td>1234567890</td>
              <td>
                <p className="cursor-pointer m-auto py-1 px-5 border border-darckBlue w-fit rounded-3xl text-darckBlue text-[16px]">
                  فتح
                </p>
              </td>
            </tr>
            <tr>
              <td>
                <div className="flex justify-center items-center gap-4">
                  <div className="w-11 rounded-full overflow-hidden">
                    <img src={avatar} alt="" />
                  </div>
                  <div className="text-right">
                    <h1 className="font-medium  text-sm text-darkGray ">
                      سيف الدين محمود
                    </h1>
                    <p className="text-lightText text-[12px]">
                      seenaseif@gmail.com
                    </p>
                  </div>
                </div>
              </td>
              <td>1234567890</td>
              <td>1234567890</td>
              <td>
                <div className="m-auto w-fit px-4 py-2 bg-statusGreen rounded-3xl ">
                  <p className="text-xs text-lightText font-normal m-auto">
                    65%
                  </p>
                </div>
              </td>
              <td>1234567890</td>
              <td>
                <p className="cursor-pointer m-auto py-1 px-5 border border-darckBlue w-fit rounded-3xl text-darckBlue text-[16px]">
                  فتح
                </p>
              </td>
            </tr>
            <tr>
              <td>
                <div className="flex justify-center items-center gap-4">
                  <div className="w-11 rounded-full overflow-hidden">
                    <img src={avatar} alt="" />
                  </div>
                  <div className="text-right">
                    <h1 className="font-medium  text-sm text-darkGray ">
                      سيف الدين محمود
                    </h1>
                    <p className="text-lightText text-[12px]">
                      seenaseif@gmail.com
                    </p>
                  </div>
                </div>
              </td>
              <td>1234567890</td>
              <td>1234567890</td>
              <td>
                <div className="m-auto w-fit px-4 py-2 bg-statusGreen rounded-3xl ">
                  <p className="text-xs text-lightText font-normal m-auto">
                    65%
                  </p>
                </div>
              </td>
              <td>1234567890</td>
              <td>
                <p className="cursor-pointer m-auto py-1 px-5 border border-darckBlue w-fit rounded-3xl text-darckBlue text-[16px]">
                  فتح
                </p>
              </td>
            </tr>
          </tbody>
          <tfoot className="text-center">
            <tr>
              <td colSpan={2}>
                <Pagination />
              </td>
            </tr>
          </tfoot>
        </table>
      )}
    </div>
  );
};

export default Table;
