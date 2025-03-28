import React from "react";

function FooterComponent() {
  return (
    <div>
      <div className=" flex flex-col">
        <footer className="bg-gray-800 p-4 text-white text-center mt-auto">
          <div className="grid lg:grid-cols-4 gap-2">
            <div>
              Threaded Logo <br />
              contact details
            </div>
            <div>
              quick liks <br />
              social media links
            </div>
            <div>
              <p>Footer Section - Always at the bottom!</p>
              payment icons
            </div>
            <div>
                Terms and conditions <br />

                policies
            </div>
          </div>
          <div className="py-2">
          © 2025 Threaded Pvt. Ltd. All Rights Reserved
          </div>
        
        </footer>
      </div>
    </div>
  );
}

export default FooterComponent;
