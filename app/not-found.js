
import Link from 'next/link';

function notfound() {
    return (
        <div className="container-wrap flex items-center justify-center min-h-screen bg-white">
            <div className="container main-content text-center">
                <div className="row">
                    <div className="col span_12">
                        <div id="error-404">
                            <h1 className="text-[250px] leading-[250px] font-bold text-[#Bd302b]">
                                404
                            </h1>

                            <h2 className="text-[54px] font-bold text-black mt-4">
                                Page Not Found
                            </h2>

                            <Link href="https://viscadia.com" className="mt-8 bg-[#BD302B] inline-block">
                                <span className=" bg-[#BD302B] text-white px-6 py-3 rounded  transition duration-300">
                                    Back Home <i className="icon-button-arrow ml-2">→</i>
                                </span>
                            </Link>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}
export default notfound