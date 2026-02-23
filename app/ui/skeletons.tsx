export function PartnerSkeleton() {
  return (
    <div className="bg-brand-50 animate-pulse shadow-sm rounded-lg h-full">
      <div className="flex flex-col gap-4 sm:flex-row items-start px-6 py-5 h-full">
        <div className="flex items-center justify-center min-w-40">
          <div className="rounded-xl bg-brand-100 h-40 w-40"></div>
        </div>

        <div className="grow h-full flex flex-col">
          <div className="w-full flex justify-between items-center gap-2 mb-3">
            <span className="h-8 w-40 bg-brand-100 rounded mt-2 mb-1 sm:mt-0 sm:mb-0"></span>
            <span className="h-8 w-8 bg-brand-100 rounded mt-2 mb-1 sm:mt-0 sm:mb-0"></span>
          </div>

          <div className="mb-2 h-30 bg-brand-100 rounded"></div>

          <div className="mt-auto">
            <div className="h-6 w-5/6 bg-brand-100 rounded"></div>
            <div className="h-4 w-5/6 bg-brand-100 rounded mt-1 mb-2"></div>
            <div className="flex items-center justify-between gap-2">
              <span className="py-1 px-2.5 rounded-lg h-8 w-30 bg-brand-100"></span>
              <span className="h-8 w-10 bg-brand-100 rounded pb-1"></span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export function PartnersSkeleton() {
  return (
    <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 mb-10 w-full">
      <PartnerSkeleton />
      <PartnerSkeleton />
      <PartnerSkeleton />
      <PartnerSkeleton />
    </div>
  );
}

export function AdditiveSkeleton() {
  return (
    <li className="inline-block ">
      <div className="rounded-full h-8 px-3 py-1 shadow-sm w-[6ch] border bg-brand-100 border-brand-200"></div>
    </li>
  );
}

export function AdditivesSkeleton() {
  return (
    <ul className="flex flex-wrap items-center justify-evenly gap-3 animate-pulse">
      {[
        ...Array(309)
          .keys()
          .map((a) => <AdditiveSkeleton key={a} />),
      ]}
    </ul>
  );
}

export function SearchAdditiveSkeleton() {
  return (
    <div className="inline-flex flex-col max-w-md animate-pulse">
      <div className="flex items-center gap-1 py-1">
        <div className="h-8 w-50 bg-brand-100 rounded"></div>
        <div className="h-8 w-8 bg-brand-100 rounded"></div>
      </div>
      <span className="h-2 w-full bg-brand-100 rounded"></span>
    </div>
  );
}
