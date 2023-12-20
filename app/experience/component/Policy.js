import React from "react";

const Policy = () => {
  return (
    <div>
      <div className="brand-container ">
        <div className="border shadow-md px-8 py-5">
          <div className="">
            <h1 className="text-[35px] font-bold text-justify text-black">
              Exclusive Bali Honeymoon Policies
            </h1>
            <div className="grid grid-cols-1 xl:grid-cols-2 md:grid-cols-1 lg:grid-cols-2 gap-4">
              {/* 1 */}
              <div className="flex flex-col gap-4 py-5">
                <h1 className="text-[20px] font-semibold">
                  Confirmation Policy
                </h1>
                <div>
                  <ul className="list-disc px-7 py-2">
                    <style>
                      {`
          .list-disc li::marker {
            color: red;
          }
        `}
                    </style>
                    <li className="py-1 font-medium">
                      The customer receives a confirmation voucher via email
                      within 24 hours of successful booking
                    </li>
                    <li className="py-1 font-medium">
                      In case the preferred slots are unavailable, an alternate
                      schedule of the customers preference will be arranged and
                      a new confirmation voucher will be sent via email.
                    </li>
                    <li className="py-1 font-medium">
                      Alternatively, the customer may choose to cancel their
                      booking before confirmation and a full refund will be
                      processed.
                    </li>
                  </ul>
                </div>
              </div>
              {/* 2 */}
              <div className="flex flex-col gap-4 py-5">
                <h1 className="text-[20px] font-semibold">Refund Policy</h1>
                <div className="flex flex-col gap-3">
                  <ul className="list-disc px-7 py-2">
                    <style>
                      {`
          .list-disc li::marker {
            color: red;
          }
        `}
                    </style>
                    <li className="py-1 font-medium">
                      The applicable refund amount will be processed within 10
                      business days.
                    </li>
                    <li className="py-1 font-medium">
                      All applicable refunds will be done in the traveler&apos;s
                      Thrillophilia wallet as Thrillcash.
                    </li>
                  </ul>
                </div>
              </div>

              {/* 3rd */}
              <div className="flex flex-col gap-4 py-5">
                <h1 className="text-[20px] font-semibold">
                  Cancellation Policy
                </h1>
                <div>
                  <ul className="list-disc px-7 py-2">
                    <li className="py-1 font-medium">
                      If cancellation are made 30 days before the date of travel
                      then 25.0% of total tour cost will be charged as
                      cancellation fees
                    </li>
                    <li className="py-1 font-medium">
                      If cancellation are made 15 days to 30 days before the
                      date of travel then 50.0% of total tour cost will be
                      charged as cancellation fees
                    </li>
                    <li className="py-1 font-medium">
                      If cancellation are made 0 days to 15 days before the date
                      of travel then 100.0% of total tour cost will be charged
                      as cancellation fees
                    </li>
                  </ul>
                </div>
              </div>
              {/* 4th */}
              <div className="">
                <h1 className="text-[20px] font-semibold">
                  Payment Terms Policy
                </h1>
                <ul className="list-disc px-7 py-2">
                  <li className="font-medium">
                    100.0% of total tour cost will have to be paid 0 days before
                    the date of booking
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Policy;
