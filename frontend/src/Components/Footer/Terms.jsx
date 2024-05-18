import React from "react";
import { Link } from "react-router-dom";

const Terms = () => {
  return (
    <div className="lg:p-20 py-20 px-4">
      <div>
        <h1 className="lg::text-7xl md:text-6xl text-3xl relative after:absolute after:left-[39%] after:right-[50%] md:after:top-[7rem] after:top-[3.4rem]  font-extrabold text-center after:w-[20%] after:h-[4px] after:bg-[#ffe600] ">
          Terms & Conditions
        </h1>
      </div>

      <div className="md:mt-32 mt-20  text-[#777] ">
        <p className="text-xl">Last updated Muy 10, 2024</p>

        <div className="mt-10 text-lg">
          <h1 className="text-xl font-semibold text-black">
            AGREEMENT TO TERMS
          </h1>
          <p className="mt-5">
            These Terms and Conditions constitute a legally binding agreement
            made between you, whether personally or on behalf of an entity
            (“you”) and Now eStore Pvt. Ltd., doing business as The Books
            Platform (“The Books Platform“, “we”, “us”, or “our”), concerning
            your access to and use of the{" "}
            <Link
              to="https://booksplatform-shpg.vercel.app/"
              className="text-blue-500 underline"
            >
              https://booksplatform-shpg.vercel.app/
            </Link>{" "}
            website as well as any other media form, media channel, mobile
            website or mobile application related, linked, or otherwise
            connected thereto (collectively, the “Site”). You agree that by
            accessing the Site, you have read, understood, and agreed to be
            bound by all of these Terms and Conditions. <br />
            <br />
            Supplemental terms and conditions or documents that may be posted on
            the Site from time to time are hereby expressly incorporated herein
            by reference. We reserve the right, in our sole discretion, to make
            changes or modifications to these Terms and Conditions at any time
            and for any reason. We will alert you about any changes by updating
            the “Last updated” date of these Terms and Conditions, and you waive
            any right to receive specific notice of each such change. It is your
            responsibility to periodically review these Terms and Conditions to
            stay informed of updates. You will be subject to, and will be deemed
            to have been made aware of and to have accepted, the changes in any
            revised Terms and Conditions by your continued use of the Site after
            the date such revised Terms and Conditions are posted.
            <br />
            <br />
            The information provided on the Site is not intended for
            distribution to or use by any person or entity in any jurisdiction
            or country where such distribution or use would be contrary to law
            or regulation or which would subject us to any registration
            requirement within such jurisdiction or country. Accordingly, those
            persons who choose to access the Site from other locations do so on
            their own initiative and are solely responsible for compliance with
            local laws, if and to the extent local laws are applicable.
            <br />
            <br />
            All users who are minors in the jurisdiction in which they reside
            (generally under the age of 18) must have the permission of, and be
            directly supervised by, their parent or guardian to use the Site. If
            you are a minor, you must have your parent or guardian read and
            agree to these Terms and Conditions prior to you using the Site.{" "}
            <br />
            <br />
          </p>
        </div>

        <div className="mt-10 text-lg">
          <h1 className="text-xl font-semibold text-black">
            INTELLECTUAL PROPERTY RIGHTS
          </h1>
          <p className="mt-5">
            Unless otherwise indicated, the Site is our proprietary property and
            all source code, databases, functionality, software, website
            designs, audio, video, text, photographs, and graphics on the Site
            (collectively, the “Content”) and the trademarks, service marks, and
            logos contained therein (the “Marks”) are owned or controlled by us
            or licensed to us, and are protected by copyright and trademark
            laws. The Content and the Marks are provided on the Site “AS IS” for
            your information and personal use only. Except as expressly provided
            in these Terms and Conditions, no part of the Site and no Content or
            Marks may be copied, reproduced, aggregated, republished, uploaded,
            posted, publicly displayed, encoded, translated, transmitted,
            distributed, sold, licensed, or otherwise exploited for any
            commercial purpose whatsoever, without our express prior written
            permission. Provided that you are eligible to use the Site, you are
            granted a limited license to access and use the Site and to download
            or print a copy of any portion of the Content to which you have
            properly gained access solely for your personal, non-commercial use.
            We reserve all rights not expressly granted to you in and to the
            Site, the Content and the Marks.
          </p>
        </div>

        <div className="mt-10 text-lg">
          <h1 className="text-xl font-semibold text-black">
            USER REPRESENTATIONS
          </h1>
          <p className="mt-5">
            By using the Site, you represent and warrant that: (1) all
            registration information you submit will be true, accurate, current,
            and complete; (2) you will maintain the accuracy of such information
            and promptly update such registration information as necessary; (3)
            you have the legal capacity and you agree to comply with these Terms
            and Conditions; (4) you are not a minor in the jurisdiction in which
            you reside, or if a minor, you have received parental permission to
            use the Site; (5) you will not access the Site through automated or
            non-human means, whether through a bot, script or otherwise; (6) you
            will not use the Site for any illegal or unauthorized purpose; and
            (7) your use of the Site will not violate any applicable law or
            regulation.
            <br />
            <br />
            If you provide any information that is untrue, inaccurate, not
            current, or incomplete, we have the right to suspend or terminate
            your account and refuse any and all current or future use of the
            Site (or any portion thereof).
          </p>
        </div>

        <div className="mt-10 text-lg">
          <h1 className="text-xl font-semibold text-black">PRODUCTS</h1>
          <p className="mt-5">
            We make every effort to display as accurately as possible the
            colors, features, specifications, and details of the products
            available on the Site. However, we do not guarantee that the colors,
            features, specifications, and details of the products will be
            accurate, complete, reliable, current, or free of other errors, and
            your electronic display may not accurately reflect the actual colors
            and details of the products. All products are subject to
            availability, and we cannot guarantee that items will be in stock.
            We reserve the right to discontinue any products at any time for any
            reason. Prices for all products are subject to change.
          </p>
        </div>

        <div className="mt-10 text-lg">
          <h1 className="text-xl font-semibold text-black">USER DATA</h1>
          <p className="mt-5">
            We will maintain certain data that you transmit to the Site for the
            purpose of managing the performance of the Site, as well as data
            relating to your use of the Site. Although we perform regular
            routine backups of data, you are solely responsible for all data
            that you transmit or that relates to any activity you have
            undertaken using the Site. You agree that we shall have no liability
            to you for any loss or corruption of any such data, and you hereby
            waive any right of action against us arising from any such loss or
            corruption of such data.
          </p>
        </div>
      </div>
    </div>
  );
};

export default Terms;
