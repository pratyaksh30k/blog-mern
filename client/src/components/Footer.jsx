import { Footer } from 'flowbite-react';
import { Link } from 'react-router-dom';
import { BsFacebook, BsInstagram, BsTwitter, BsGithub, BsDribbble } from 'react-icons/bs';

export default function FooterCom() {
  return (
    <Footer container className='border border-solid border-t-4 border-[#EF233D]'>
      <div className='w-full'>
        <div className='flex flex-col md:flex-row justify-around md:items-center'>
          <div className='mt-5 flex justify-center md:justify-start'>
            <Link
              to="/"
              className="items-center whitespace-nowrap text-3xl font-semibold md:text-2xl text-gray-700 hover:text-black dark:text-white flex gap-1"
            >
              <span className="px-3 py-1 rounded-lg bg-gradient-to-r from-[#EF233D] to-[#F48F2A] text-white transition-all duration-300 transform hover:scale-105 hover:shadow-lg hover:bg-gradient-to-l">
                Pratyaksh's
              </span>
              Blog
            </Link>
          </div>
          <div className='grid grid-cols-2 gap-8 mt-4 sm:grid-cols-3 sm:gap-6 md:mt-0'>
            <div>
              <Footer.Title title='About' className='font-semibold text-lg'/>
              <Footer.LinkGroup col>
                <Footer.Link
                  href='https://github.com/pratyaksh30k'
                  target='_blank'
                  rel='noopener noreferrer'
                  className='hover:text-black text-base'
                >
                  Projects
                </Footer.Link>
                <Footer.Link
                  href='/about'
                  target='_blank'
                  rel='noopener noreferrer'
                  className='hover:text-black text-base'
                >
                  Pratyaksh's Blog
                </Footer.Link>
              </Footer.LinkGroup>
            </div>
            <div>
              <Footer.Title title='Follow us' className='font-semibold text-lg'/>
              <Footer.LinkGroup col>
                <Footer.Link
                  href='https://github.com/pratyaksh30k'
                  target='_blank'
                  rel='noopener noreferrer'
                  className='hover:text-black text-base'
                >
                  Github
                </Footer.Link>
                <Footer.Link href='#' className='hover:text-black text-base'>Discord</Footer.Link>
              </Footer.LinkGroup>
            </div>
            <div>
              <Footer.Title title='Legal' className='font-semibold text-lg'/>
              <Footer.LinkGroup col>
                <Footer.Link href='#' className='hover:text-black text-base'>Privacy Policy</Footer.Link>
                <Footer.Link href='#' className='hover:text-black text-base'>Terms &amp; Conditions</Footer.Link>
              </Footer.LinkGroup>
            </div>
          </div>
        </div>
        <Footer.Divider />
        <div className='flex flex-col sm:flex-row sm:items-center sm:justify-around'>
          <Footer.Copyright
            href='#'
            by="Pratyaksh's blog"
            year={new Date().getFullYear()}
            className='hover:text-black text-base'
          />
          <div className="flex gap-6 mt-4 sm:mt-0 justify-center sm:justify-end">
            <Footer.Icon href='#' icon={BsFacebook} className='hover:text-black'/>
            <Footer.Icon href='#' icon={BsInstagram} className='hover:text-black'/>
            <Footer.Icon href='#' icon={BsTwitter} className='hover:text-black'/>
            <Footer.Icon href='https://github.com/pratyaksh30k' icon={BsGithub} className='hover:text-black'/>
            <Footer.Icon href='#' icon={BsDribbble} className='hover:text-black'/>
          </div>
        </div>
      </div>
    </Footer>
  );
}
