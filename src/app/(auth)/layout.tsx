interface AuthLayoutProps {
  children: React.ReactNode;
}

const AuthLayout = ({ children }: AuthLayoutProps) => {
  return (
    <div className="flex items-center justify-center w-full h-full backdrop-blur-sm bg-neutral-600/10 fixed inset-0">
      <div className="relative">
        <div>{children}</div>
      </div>
    </div>
  );
};

export default AuthLayout;
