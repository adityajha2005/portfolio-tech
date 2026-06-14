type ShadowBoxProps = {
  children?: React.ReactNode;
  label?: string;
  width: number;
  height: number;
};
export function ShadowBox({ children, label, width, height }: ShadowBoxProps) {
  return (
    <div className="group inline-block text-center">
      <div
        className="rounded-[20px] border border-border-primary p-2"
        style={{ width, height }}
      >
        <div
          className="grid h-full place-items-center rounded-xl border-2 border-border-primary/10 bg-bg-elevated"
          style={{ boxShadow: "0px 2px 1.5px 0px #A5AEB852 inset" }}
        >
          {children ? children : null}
        </div>
      </div>
      {label ? <p className="mt-3 text-sm text-text-secondary">{label}</p> : null}
    </div>
  );
}
