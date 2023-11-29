import Avatar from 'react-avatar';

const Dashboard =  () => {

  return (
    <section id="contact" className="overflow-hidden py-16 md:py-20 lg:py-28">
      <div className="container">
        <div className="-mx-4 flex flex-wrap">
          <div className="w-full px-4 lg:w-7/12 xl:w-8/12">
            <div
              className="wow fadeInUp mb-12 rounded-md bg-primary py-8 px-8 dark:bg-dark sm:p-[55px] lg:mb-5 lg:px-8 xl:p-[55px]"
              data-wow-delay=".15s
              "
            >
              <div className="text-center border-b">
                <Avatar name="UserName" size="100" round={true} />
                <h5 class="mb-1 text-xl font-medium text-gray-900 dark:text-white">UserName</h5>
                <span class="text-sm">currentUser.email</span>
              </div>

            </div>
          </div>
          <div className="mb-10 rounded-md bg-primary bg-opacity-5 dark:bg-opacity-10">
          </div>
        </div>
        <Contact />

      </div>
      

    </section>
  );
};

export default Dashboard;
