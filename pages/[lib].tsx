import { motion } from "framer-motion";
import { GetServerSideProps, GetStaticPaths, GetStaticProps } from "next";
import Link from "next/link";

interface LibPageProps {
  lib: string;
}

const NextPage: React.FC<LibPageProps> = ({ lib }) => {
  return (
    <div className="flex flex-col items-center">
      <motion.img
        src={`/img/${lib}.svg`}
        layoutId={`${lib}-logo`}
      />

      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1, duration: 1 }}
      >
        <Link href="/">
          <a className="bg-gray-900 text-gray-50 px-6 py-3 text-lg font-semibold rounded-xl hover:bg-gray-700 trasition">
            Voltar para home
          </a>
        </Link>
      </motion.div>
    </div>
  )
}

export const getStaticPaths: GetStaticPaths = async () => {
  const paths = [
    {params: {lib: 'nextjs'}},
    {params: {lib: 'tailwind'}},
    {params: {lib: 'framermotion'}},
  ]

  return {
    paths,
    fallback: false
  }
}

export const getStaticProps: GetStaticProps<LibPageProps> = async (context) => {
  const { lib } = context.params;
  return {
    props: {
      lib: String(lib)
    },
    revalidate: 60
  }
}

export default NextPage;