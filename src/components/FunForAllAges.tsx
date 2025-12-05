import twinBoys from "@/assets/twin-boys.png";

export function FunForAllAges() {
  return (
    <section className="py-16 bg-background">
      <div className="container mx-auto px-4">
        <div className="flex justify-center">
          <img 
            src={twinBoys} 
            alt="Two boys wearing WaLa AR t-shirts making funny faces" 
            className="max-w-full h-auto"
          />
        </div>
      </div>
    </section>
  );
}
